import { FAB } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackScreens } from '../types/types';

const plusIcon = () => <Icon name="plus" />;

export default function FabButton() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackScreens>>();
    return (
        <FAB icon={plusIcon} onPress={() => navigation.navigate('AddPlants')} />
    )
}