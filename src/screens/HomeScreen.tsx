import { StyleSheet, View } from "react-native";
import FabButton from "../components/FabButton";
import GlobalStyles from "../assets/styles/GlobalStyles";
import ScrollDropDownList from "../components/ScrollDropDownList";




export default function HomeScreen() {

    return (
        <View style={GlobalStyles.container}>
            <ScrollDropDownList />
            <View style={styles.fab}>
                <FabButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16
    }
})