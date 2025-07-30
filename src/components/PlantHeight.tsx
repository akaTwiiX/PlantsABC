import { View, Text } from 'react-native'
import React from 'react'
import { usePlantFormStore } from '@/store/usePlantFormStore'
import { distanceRange } from '@/consts/distanceRange';
import FlexRangeSlider from './RangeSlider';
import { numberToString } from '@/utils/numberToString';

export default function PlantHeight() {
    const { height, setValue } = usePlantFormStore();
    return (
        <View>
            <Text >
                Größe: {numberToString(height.start) ?? 'N/A'}m bis {numberToString(height.end) ?? 'N/A'}m
            </Text>
            <FlexRangeSlider
                range={distanceRange}
                onRangeChange={(val) => setValue('height', val)}
                value={height}
            />
        </View>
    )
}