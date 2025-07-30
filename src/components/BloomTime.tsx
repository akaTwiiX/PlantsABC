import { Text, View } from 'react-native'
import React from 'react'
import { usePlantFormStore } from '@/store/usePlantFormStore'
import { monthRange } from '@/consts/monthRange';
import FlexRangeSlider from './RangeSlider';

export default function BloomTime() {
    const { bloomTime, setValue } = usePlantFormStore();
    return (
        <View>
            <Text >
                Blüte-/Erntezeit: {bloomTime.start ?? 'N/A'} bis {bloomTime.end ?? 'N/A'}
            </Text>
            <FlexRangeSlider
                range={monthRange}
                onRangeChange={(val) => setValue('bloomTime', val)}
                value={bloomTime}
            />
        </View>
    )
}
