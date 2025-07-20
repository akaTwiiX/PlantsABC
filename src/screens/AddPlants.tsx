import { TextInput } from "@react-native-material/core";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Platform } from "react-native";
import LightSelector from "../components/LightSelector";
import { useState } from "react";
import { LightRequirement } from "../enums/LightRequirement";
import BloomRangePicker from "../components/BloomRangePicker";
import ImagePicker from "../components/ImagePicker";

export default function AddPlants() {
    const [image, setImage] = useState<string | null>(null);
    const [latName, setLatName] = useState<string>('');
    const [deName, setDeName] = useState<string>('');
    const [light, setLight] = useState<LightRequirement>(LightRequirement.FULL_SUN);
    const [startMonth, setStartMonth] = useState<number>(0);
    const [endMonth, setEndMonth] = useState<number>(0);
    const [comment, setComment] = useState('');

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.scrollContent}
            >
                <ImagePicker value={image} onChange={setImage} />
                <TextInput label="Lateinischer Name" value={latName} onChangeText={setLatName} />
                <TextInput label="Deutscher Name" value={deName} onChangeText={setDeName} />
                <LightSelector value={light} onChange={setLight} />
                <BloomRangePicker
                    startMonth={startMonth}
                    endMonth={endMonth}
                    onChangeStart={setStartMonth}
                    onChangeEnd={setEndMonth}
                />
                <TextInput
                    label="Kommentare / Notizen"
                    value={comment}
                    onChangeText={setComment}
                    multiline
                    numberOfLines={8}
                    style={[styles.input]}
                    textAlignVertical="top"
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        flexGrow: 1,
    },
    input: {
        marginBottom: 12,
        height: 150,
    },
});
