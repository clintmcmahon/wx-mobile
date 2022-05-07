import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as locationService from '../services/LocationService';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    const state = useSelector(state => state);

    if (state.location) {
        return (
            <View>
                <Text>{state.location.station}</Text>
            </View>
        )
    }
    else {

        return (
            <View>
                <Text>You need to set a location</Text>
            </View>
        )
    }
}

export default Home;