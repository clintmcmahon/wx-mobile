import React from 'react';
import {Text} from 'react-native';
import SetLocation from "../components/location/SetLocation";
import Screen from "./Screen";

function SettingsScreen() {
    return (
      <Screen>
        <Text>Set Location</Text>
        <SetLocation />
      </Screen>
    );
  }

  export default SettingsScreen;