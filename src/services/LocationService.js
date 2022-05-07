import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocation = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('location', jsonValue)
    } catch (e) {
        // saving error
    }
}
export const getLocation = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('location')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('error')
    }
}