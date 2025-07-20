import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddPlants from '../screens/AddPlants';
import Header from '../components/Header';

type RootStackScreens = {
    Home: undefined;
    AddPlants: undefined;
};

const Stack = createNativeStackNavigator<RootStackScreens>();

function header({
    navigation,
    route,
    options,
}: NativeStackHeaderProps) {
    return (
        <Header
            title={options.title ?? route.name}
            showBackButton={navigation.canGoBack()}
            onBack={navigation.goBack}
        />
    );
}

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                header
            })}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'PflanzenABC' }}
            />
            <Stack.Screen
                name="AddPlants"
                component={AddPlants}
                options={{ title: 'Erstelle Pflanzen Artikel' }}
            />
        </Stack.Navigator>
    );
}
