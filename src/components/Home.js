import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as locationService from '../services/LocationService';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from "@react-navigation/native";

import RecordHigh from './records/RecordHigh';
function Home() {
    const state = useSelector(state => state);
    const theme = useTheme();

    if (state.location) {
        return (
            <ScrollView>
                <View>
                    <Text style={{ fontSize: theme.h1Size }}>{state.location.station}</Text>
                </View>
                <View>
                    <RecordHigh temp={null} />
                </View>
            </ScrollView>

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