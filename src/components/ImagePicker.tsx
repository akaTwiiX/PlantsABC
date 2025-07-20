import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { openImagePicker } from '@/utils/ImageService';





type Props = {
    value: string | null;
    onChange: (value: string) => void;
};

export default function ImagePicker({ value, onChange }: Props) {


    return (

        <TouchableOpacity
            onPress={() => openImagePicker(onChange)}
            style={styles.button}
        >
            {value ? (
                <Image
                    source={{ uri: value }}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Text style={styles.text}>Bild hinzufügen</Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 200,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    text: {
        color: '#666'
    }
})