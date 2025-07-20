import { RangeSliderType } from '@/types/RangeSliderType';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RangeSlider from 'rn-range-slider';

interface FlexRangeSliderProps<T> {
    values: T[];
    onRangeChange: (value: RangeSliderType) => void;
}

export default function FlexRangeSlider<T extends string>({
    values,
    onRangeChange,
}: FlexRangeSliderProps<T>) {

    const handleValueChange = useCallback(
        (low: number, high: number) => {
            if (values.length > 0) {
                onRangeChange({ start: values[low], end: values[high] });
            }
        },
        [onRangeChange, values]
    );

    const renderThumb = useCallback(() => <View style={styles.thumb} />, []);
    const renderRail = useCallback(() => <View style={styles.rail} />, []);
    const renderRailSelected = useCallback(
        () => <View style={styles.railSelected} />,
        []
    );
    const renderLabel = useCallback(
        (value: number) => (
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>
                    {values[Math.round(value)] ?? ''}
                </Text>
            </View>
        ),
        [values]
    );
    const renderNotch = useCallback(() => <View style={styles.notch} />, []);

    return (
        <View style={styles.container}>
            {values.length > 0 ? (
                <RangeSlider
                    style={styles.slider}
                    min={0}
                    max={values.length - 1}
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