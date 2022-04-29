import React from 'react';
import { View, Text } from 'react-native'
import * as locationService from '../services/LocationService';
import Home from "../components/Home";
import SetLocation from "../components/location/SetLocation";
function HomeScreen() {
    if (locationService.getLocation() === null) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <SetLocation />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Home />
        </View>
    );
}

export default HomeScreen;