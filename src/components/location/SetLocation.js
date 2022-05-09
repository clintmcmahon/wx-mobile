import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeLocation } from "../../actions/locations";
import stationData from "../../data/stationData.json";
import { Picker } from "@react-native-picker/picker";
import * as locationService from "../../services/LocationService";
import { useTheme } from "@react-navigation/native";

function SetLocation() {
  const theme = useTheme();
  const [selectedState, setSelectedState] = useState(null);
  const [selectedStateStations, setSelectedStateStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.location) {
      setSelectedState(state.location.state);
      setSelectedStateStations(
        locationService.getStationsByState(state.location.state)
      );
      setSelectedStation(state.location.station);
    } else {
      const defaultState = "AL";
      const defaultStateStations =
        locationService.getStationsByState(defaultState);
      setSelectedState(defaultState);
      setSelectedStateStations(defaultStateStations);
      setSelectedStation(defaultStateStations[0]);
    }
  }, []);

  const setState = (stateShortCode) => {
    const selectedState = stationData.find(
      (state) => state.shortCode === stateShortCode
    );
    const areaStations = selectedState.stations.filter((station) =>
      station.name.toLowerCase().endsWith("area")
    );
    setSelectedState(stateShortCode);
    setSelectedStateStations(areaStations);
  };

  const setStation = (station) => {
    setSelectedStation(station);
  };

  const saveClick = () => {
    const location = {
      state: selectedState,
      station: selectedStation,
    };

    dispatch(changeLocation(location));
    locationService.setLocation(location);
  };

  return (
    <View>
      <Text style={{ fontSize: theme.h2Size }}>Set your location</Text>
      <View style={{ paddingTop: 15 }}>
        <View>
          <Text style={{ fontWeight: "bold" }}>State:</Text>
        </View>

        <Picker
          selectedValue={selectedState}
          onValueChange={(state, itemIndex) => setState(state)}
        >
          {stationData.map((state) => {
            return (
              <Picker.Item
                key={state.shortCode}
                label={state.name}
                value={state.shortCode}
              />
            );
          })}
        </Picker>
      </View>
      <View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Station</Text>
        </View>
        {selectedStation && selectedStateStations && (
          <Picker
            selectedValue={selectedStation}
            onValueChange={(station, itemIndex) => setStation(station)}
          >
            {selectedStateStations.map((station) => {
              return (
                <Picker.Item
                  key={station.name}
                  label={station.name}
                  value={station.name}
                />
              );
            })}
          </Picker>
        )}
      </View>
      <View style={{ paddingTop: 15 }}>
        <TouchableOpacity onPress={saveClick} style={{ padding: 5 }}>
          <Text
            style={{
              color: "#ffffff",
              backgroundColor: "#000000",
              padding: 10,
              textAlign: "center",
            }}
          >
            Save Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SetLocation;
