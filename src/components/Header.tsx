import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'

type props = {
    title: string;
    showBackButton?: boolean;
    onBack?: () => void;
};

const backButton = () => <Icon name='chevron-back-outline' size={20} />

export default function Header({ title, showBackButton, onBack }: props) {


    return (
        <View style={styles.container}>
            {showBackButton && (
                <IconButton icon={backButton} onPress={onBack} />
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
    }
})