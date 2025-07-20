import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Props = {
    startMonth: number;
    endMonth: number;
    onChangeStart: (month: number) => void;
    onChangeEnd: (month: number) => void;
};

const monthLabels = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

export default function BloomRangePicker({
    startMonth,
    endMonth,
    onChangeStart,
    onChangeEnd,
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Blütezeit</Text>
            <View style={styles.row}>
                <View style={styles.pickerWrapper}>
                    <Text style={styles.subLabel}>von</Text>
                    <Picker
                        selectedValue={startMonth}
                        onValueChange={onChangeStart}
                        style={styles.picker}
                    >
                        <Picker.Item label="Start" value={null} />
                        {monthLabels.map((label, index) => (
                            <Picker.Item label={label} value={index + 1} key={index} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.pickerWrapper}>
                    <Text style={styles.subLabel}>bis</Text>
                    <Picker
                        selectedValue={endMonth}
                        onValueChange={onChangeEnd}
                        style={styles.picker}
                    >
                        <Picker.Item label="Ende" value={null} />
                        {monthLabels.map((label, index) => (
                            <Picker.Item
                                label={label}
                                value={index + 1}
                                key={index}
                                enabled={startMonth == null || index + 1 >= startMonth}
                            />
                        ))}
                    </Picker>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    pickerWrapper: {
        flex: 1,
    },
    subLabel: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    picker: {
        backgroundColor: '#f0f0f0',
        borderRadius: 6,
    },
});

