import { RangeSliderType } from '@/types/RangeSliderType';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RangeSlider from 'rn-range-slider';

interface FlexRangeSliderProps<T> {
    range: T[];
    onRangeChange: (value: RangeSliderType) => void;
    value: RangeSliderType;
}

function getRangeIndex<T>(range: T[], value: string | number | null, fallback: number = 0): number {
    const index = range.indexOf(value as T);
    return index >= 0 ? index : fallback;
}


export default function FlexRangeSlider<T extends string | null | number>({
    range,
    onRangeChange,
    value
}: FlexRangeSliderProps<T>) {


    const handleValueChange = useCallback((low: number, high: number) => {
        const start = range[low];
        const end = range[high];


        if (value.start !== start || value.end !== end) {
            onRangeChange({ start, end });
        }
    }, [range, value, onRangeChange]);


    const renderThumb = useCallback(() => <View style={styles.thumb} />, []);
    const renderRail = useCallback(() => <View style={styles.rail} />, []);
    const renderRailSelected = useCallback(
        () => <View style={styles.railSelected} />,
        []
    );
    const renderLabel = useCallback(
        (val: number) => (
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>
                    {range[Math.round(val)] ?? ''}
                </Text>
            </View>
        ),
        [range]
    );
    const renderNotch = useCallback(() => <View style={styles.notch} />, []);

    return (
        <View style={styles.container}>
            {range.length > 0 ? (
                <RangeSlider
                    style={styles.slider}
                    min={0}
                    max={range.length - 1}
                    low={getRangeIndex(range, value.start)}
                    high={getRangeIndex(range, value.end, range.length - 1)}
                    step={1}
                    renderThumb={renderThumb}
                    renderRail={renderRail}
                    renderRailSelected={renderRailSelected}
                    renderLabel={renderLabel}
                    renderNotch={renderNotch}
                    onValueChanged={handleValueChange}
                />
            ) : (
                <Text style={styles.noValuesText}>Keine Werte verfügbar.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 30,
        alignItems: 'center',
        paddingHorizontal: 30
    },
    slider: {
        width: '100%'
    },
    mainLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    thumb: {
        width: 25,
        height: 25,
        borderRadius: 15,
        backgroundColor: '#2ecc71',
        borderWidth: 2,
        borderColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    rail: {
        flex: 1,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#bdc3c7',
    },
    railSelected: {
        height: 4,
        backgroundColor: '#1abc9c',
        borderRadius: 2,
    },
    labelContainer: {
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 6,
        backgroundColor: '#ecf0f1',
        borderRadius: 5,
        minWidth: 40,
    },
    labelText: {
        fontSize: 14,
        color: '#34495e',
        fontWeight: 'bold',
    },
    notch: {
        width: 8,
        height: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#ecf0f1',
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderTopWidth: 8,
    },
    noValuesText: {
        fontSize: 16,
        color: 'red',
        marginTop: 20,
    },
});