import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeLocation } from '../../actions/locations';
import stationData from "../../data/stationData.json";
import { Picker } from '@react-native-picker/picker';
import * as locationService from "../../services/LocationService";

function SetLocation() {
    const [selectedState, setSelectedState] = useState(stationData[0]);
    const [selectedStateStations, setSelectedStateStations] = useState(stationData[0].stations);
    const [selectedStation, setSelectedStation] = useState(stationData[0].stations[0]);
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const setState = (stateShortCode) =>{
        const selectedState = stationData.find(state => state.shortCode === stateShortCode);
        setSelectedState(stateShortCode);
        setSelectedStateStations(selectedState.stations);
    }

    const setStation = (station) =>{
        setSelectedStation(station);
        setLocation({
            state: selectedState,
            station: station
        });
    }

    const setLocation = (location) => {
        dispatch(changeLocation(location));
    }

    return (
        <View>
            <View>
                <View>
                    <Text>Select a state</Text>
                </View>
                <Picker
                    selectedValue={selectedState}
                    onValueChange={(state, itemIndex) =>
                        setState(state)
                    }>
                    {stationData.map((state) => {
                        return (
                            <Picker.Item key={state.shortCode} label={state.name} value={state.shortCode} />

                        )
                    })}
                </Picker>
            </View>
            <View>
                <View>
                    <Text>Set your station</Text>
                </View>
                <Picker
                    selectedValue={selectedStation}
                    onValueChange={(station, itemIndex) =>
setStation(station)                    }>
                    {selectedStateStations.map((station) => {
                        return (
                            <Picker.Item key={station.name} label={station.name} value={station.name} />

                        )
                    })}
                </Picker>
            </View>
        </View>
    )
}

export default SetLocation;