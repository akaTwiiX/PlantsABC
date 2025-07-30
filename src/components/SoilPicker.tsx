import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { usePlantFormStore } from '@/store/usePlantFormStore'

export default function SoilPicker() {
    const { soil, setValue } = usePlantFormStore();
    const soilArray: string[] = ['Erde', 'niceErde'];
    return (
        <View>
            <Text>Erde</Text>
            <Picker
                selectedValue={soil}
                onValueChange={(val) => setValue('soil', val)}
                style={styles.picker}
            >
                <Picker.Item label="Keine Erde" value={null} />
                {soilArray.map((label, index) => (
                    <Picker.Item label={label} value={index + 1} key={index} />
                ))}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#f0f0f0',
        borderRadius: 6,
    },
})