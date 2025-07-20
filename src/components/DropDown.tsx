import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-native-material/core'

type props = {
    title: string,
    second: boolean,
    isOpen: boolean,
    onToggle: () => void
}


export default function DropDown({ title, second, isOpen, onToggle }: props) {

    const isSecond = second ? styles.second : styles.first;
    return (
        <View>
            <Button style={[isSecond, styles.button]} titleStyle={styles.buttonText} title={title} onPress={onToggle} />
            {isOpen &&
                <View style={styles.container}>
                    {
                        <View>
                            <Text style={styles.title}>Pflanze</Text>
                        </View>
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    button: {
        height: 50,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 24
    },
    first: {
        backgroundColor: '#bec9b5'
    },
    second: {
        backgroundColor: '#d7dcd3ff'
    },
    title: {
        fontSize: 16
    }
})