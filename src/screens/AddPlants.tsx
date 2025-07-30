import { TextInput } from "@react-native-material/core";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Platform } from "react-native";
import LightSelector from "../components/LightSelector";
import ImagePicker from "../components/ImagePicker";
import { usePlantFormStore } from "@/store/usePlantFormStore";
import BloomTime from "@/components/BloomTime";
import PlantHeight from "@/components/PlantHeight";
import SoilPicker from "@/components/SoilPicker";
import { useEffect } from "react";



export default function AddPlants() {
    const {
        nameLatin,
        nameGerman,
        light,
        notice,
        setValue
    } = usePlantFormStore();

    useEffect(() => {
        console.log('läuft...');

        return () => {
            console.log('aufgeräumt!');
        };
    }, []);



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
                <ImagePicker />
                <TextInput label="Lateinischer Name" value={nameLatin} onChangeText={(text) => setValue('nameLatin', text)} />
                <TextInput label="Deutscher Name" value={nameGerman} onChangeText={(text) => setValue('nameGerman', text)} />
                <LightSelector value={light} onChange={(val) => setValue('light', val)} />
                <BloomTime />
                <PlantHeight />
                <SoilPicker />



                <TextInput
                    label="Kommentare / Notizen"
                    value={notice}
                    onChangeText={(text) => setValue('notice', text)}
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
