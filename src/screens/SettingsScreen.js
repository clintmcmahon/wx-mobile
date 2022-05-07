import React from 'react';
import {View, Text} from 'react-native';
import SetLocation from "../components/location/SetLocation";
function SettingsScreen() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Set Location</Text>
        <SetLocation />
      </View>
    );
  }

  export default SettingsScreen;