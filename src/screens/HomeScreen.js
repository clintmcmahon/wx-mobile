import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import * as locationService from '../services/LocationService';
import Home from "../components/Home";
import SetLocation from "../components/location/SetLocation";
import { set } from 'react-native-reanimated';
function HomeScreen() {
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Home />
        </View>
    );
}

export default HomeScreen;