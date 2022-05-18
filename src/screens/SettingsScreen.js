import React from "react";
import SetLocation from "../components/location/SetLocation";
import Screen from "./Screen";

function SettingsScreen({navigation}) {
  return (
    <Screen>
      <SetLocation navigation={navigation}/>
    </Screen>
  );
}

export default SettingsScreen;
