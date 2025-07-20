import { Alert, PermissionsAndroid, Platform } from 'react-native';
import {
    launchCamera,
    launchImageLibrary,
    ImagePickerResponse,
    Asset,
    ImageLibraryOptions,
    CameraOptions,
} from 'react-native-image-picker';



const options: ImageLibraryOptions & CameraOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 1,
};
async function requestCameraPermission() {
    if (Platform.OS === 'android') {
        try {
            const grantedCamera = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Kamera-Berechtigung",
                    message: "Diese App benötigt Zugriff auf Ihre Kamera, um Fotos aufzunehmen.",
                    buttonNeutral: "Später fragen",
                    buttonNegative: "Abbrechen",
                    buttonPositive: "OK"
                }
            );
            const grantedStorage = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Speicher-Berechtigung",
                    message: "Diese App benötigt Zugriff auf Ihren Speicher, um Fotos zu speichern.",
                    buttonNeutral: "Später fragen",
                    buttonNegative: "Abbrechen",
                    buttonPositive: "OK"
                }
            );

            if (grantedCamera === PermissionsAndroid.RESULTS.GRANTED ||
                grantedStorage === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Kamera- und Speicherberechtigungen erteilt");
                return true;
            } else {
                console.log("Kamera- oder Speicherberechtigungen verweigert", grantedCamera);
                Alert.alert("Berechtigung verweigert", `Sie müssen die Berechtigungen erteilen, um diese Funktion nutzen zu können. ${grantedCamera} ${grantedStorage}`);
                return false;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    }
    return true;
};
export async function openImagePicker(setUri: (s: string) => void) {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
        return;
    }

    Alert.alert(
        "Bild auswählen",
        "Möchtest du ein Bild aus der Galerie wählen oder ein neues aufnehmen?",
        [
            {
                text: "Galerie",
                onPress: () => launchImageLibrary(options, (response) => handleResponse(response, setUri)),
            },
            {
                text: "Kamera",
                onPress: () => launchCamera(options, (response) => handleResponse(response, setUri)),
            },
            {
                text: "Abbrechen",
                style: "cancel",
            },
        ],
        { cancelable: true }
    );
};
function handleResponse(response: ImagePickerResponse, setUri: (uri: string) => void) {
    if (response.didCancel) {
        console.log('Benutzer hat die Auswahl abgebrochen');
    } else if (response.errorCode) {
        // Zugriff auf errorMessage, das ein String ist
        console.log('ImagePicker Fehler: ', response.errorCode, response.errorMessage);
        Alert.alert('Fehler', `Es gab einen Fehler: ${response.errorMessage || 'Unbekannter Fehler'}`);
    } else if (response.assets && response.assets.length > 0) {
        // Wenn assets vorhanden sind und das erste Asset existiert
        const asset: Asset = response.assets[0];
        if (asset.uri) { // Sicherstellen, dass uri vorhanden ist
            setUri(asset.uri);
            console.log('Ausgewähltes Bild URI: ', asset.uri);
            // Hier könntest du das Bild hochladen oder weiterverarbeiten
        } else {
            console.log('Kein URI für das ausgewählte Asset gefunden.');
        }
    } else {
        console.log('Keine Assets in der Antwort gefunden.');
    }
};




