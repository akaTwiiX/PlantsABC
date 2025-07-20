import { TextInput } from "@react-native-material/core";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Platform, Text } from "react-native";
import LightSelector from "../components/LightSelector";
import ImagePicker from "../components/ImagePicker";
import FlexRangeSlider from "@/components/RangeSlider";
import { usePlantFormStore } from "@/store/usePlantFormStore";
import { monthRange } from "@/consts/MonthRange";



export default function AddPlants() {
    const {
        latName, setLatName,
        deName, setDeName,
        comment, setComment,
        image, setImage,
        light, setLight,
        selectedMonthRange, setSelectedMonthRange
    } = usePlantFormStore();


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
                <Text >
                    Ausgewählter Bereich: {selectedMonthRange.start ?? 'N/A'} bis {selectedMonthRange.end ?? 'N/A'}
                </Text>
                <FlexRangeSlider
                    values={monthRange}
                    onRangeChange={setSelectedMonthRange}
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
