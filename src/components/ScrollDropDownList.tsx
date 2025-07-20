import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import DropDown from './DropDown';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export default function ScrollDropDownList() {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
    return (
        <ScrollView style={styles.scrollView}>
            {letters.map((letter, key) => (
                <View key={key} style={styles.dropDownItem}>
                    <DropDown
                        title={letter}
                        second={key % 2 !== 0}
                        isOpen={activeDropdown === key}
                        onToggle={() => setActiveDropdown((prev) => (prev === key ? null : key))}
                    />
                </View>
            )
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 16,
        gap: 8,
        flexDirection: 'column',
        marginVertical: 16
    },
    dropDownItem: {
        marginBottom: 8
    }
})