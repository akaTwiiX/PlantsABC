import { View } from "react-native";
import AppNavigator from "../navigation/AppNavigator";


export default function MainScreen() {
    return (
        <View style={{ flex: 1 }}>
            <AppNavigator />
        </View>
    )
}