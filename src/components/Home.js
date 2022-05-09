import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as locationService from "../services/LocationService";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";

import RecordHigh from "./records/RecordHigh";
import * as weatherDataService from "../services/weatherDataService";

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [records, setRecords] = useState(null);
  const state = useSelector((state) => state);
  const theme = useTheme();

  useEffect(() => {
    const getRecords = async () => {
      const selectedStation = locationService.getStationIdByStateAndStationName(
        state.location.state,
        state.location.station
      );
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
      const day = selectedDate.getDate().toString().padStart(2, "0");
      const year = selectedDate.getFullYear();
      const shortDate = month + "-" + day;
      const longDate = year + "-" + month + "-" + day;
      const dateName =
        selectedDate.toLocaleString("en-US", { month: "long" }) + " " + day;

      setRecords(
        await weatherDataService.getRecords(
          selectedStation.sids[0],
          shortDate,
          shortDate
        )
      );
    };

    if (state.location) {
      getRecords();
    }
  });

  if (records) {
    return (
      <ScrollView>
        <View>
          <Text style={{ fontSize: theme.h1Size }}>
            {state.location.station}
          </Text>
        </View>
        <View>
          <RecordHigh temp={records.highTemp} date={records.highDate} />
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text>You need to set a location</Text>
      </View>
    );
  }
}

export default Home;
