import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { LightRequirement, icons } from '../enums/LightRequirement';

type Props = {
    value: LightRequirement;
    onChange: (value: LightRequirement) => void;
};

export default function LightSelector({ value, onChange }: Props) {
    const options: { label: string; value: LightRequirement }[] = [
        {
            label: 'Sonne',
            value: LightRequirement.FULL_SUN,
        },
        {
            label: 'Halbschatten',
            value: LightRequirement.PARTIAL_SHADE,
        },
        {
            label: 'Schatten',
            value: LightRequirement.SHADE,
        },
    ];

    return (
        <View style={styles.container}>
            {options.map((opt) => (
                <TouchableOpacity
                    key={opt.value}
                    onPress={() => onChange(opt.value)}
                    style={[
                        styles.option,
                        value === opt.value && styles.selected,
                    ]}
                >
                    <Image
                        source={icons[opt.value]}
                        style={[styles.icon, value === opt.value && styles.iconSelected]}
                        resizeMode="contain" />
                    <Text style={[styles.label, value === opt.value && styles.labelSelected]}>
                        {opt.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    option: {
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        width: 100
    },
    selected: {
        backgroundColor: '#74b816',
    },
    icon: {
        width: 32,
        height: 32,
        tintColor: '#444',
    },
    iconSelected: {
        tintColor: '#fff',
    },
    label: {
        marginTop: 4,
        fontSize: 12,
        color: '#333',
    },
    labelSelected: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

