import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as locationService from "../services/LocationService";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import * as weatherDataService from "../services/WeatherDataService";
import RecordCard from "./records/RecordCard";
import RecordChart from "./records/RecordChart";

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateName, setDateName] = useState()
  const [records, setRecords] = useState(null);
  const [normals, setNormals] = useState(null);
  const [recordHighsAndLows, setRecordHighsAndLows] = useState(null);
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
      
      setDateName(
        selectedDate.toLocaleString("en-US", { month: "long" }) + " " + day);

      setRecords(
        await weatherDataService.getRecords(
          selectedStation.sids[0],
          shortDate,
          shortDate
        )
      );

      setNormals(
        await weatherDataService.getNormals(
          selectedStation.sids[0],
          longDate,
          longDate
        )
      );

      setRecordHighsAndLows(
        await weatherDataService.getRecordHighsAndLows(selectedStation.sids[0], shortDate)
      );
    };

    if (state.location) {
      getRecords();
    }
  }, [state.location]);

    return (
      <ScrollView>
        <View>
          <Text style={{ fontSize: 20 }}>
            {state.location.station}
          </Text>
          <Text style={{fontSize: 18, color:theme.colors.dark, paddingTop: 5}}>{dateName}</Text>
        </View>
        <View style={{ paddingTop: 20 }}>
          <RecordCard
            title="Record High"
            temp={records ? records.highTemp : null}
            date={records ? records.highDate : null}
            hotCold="hot"
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <RecordCard
            title="Normal High"
            temp={normals ? normals.high : null}
            hotCold="hot"
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <RecordChart
            title="Record Highs"
            data={recordHighsAndLows ? recordHighsAndLows.highs : null}
            hotCold="hot"
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <RecordCard
            title="Record Low"
            temp={records ? records.lowTemp : null}
            date={records ? records.lowDate : null}
            hotCold="cold"
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <RecordCard
            title="Normal Low"
            temp={normals ? normals.low : null}
            hotCold="cold"
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <RecordChart
            title="Record Lows"
            data={recordHighsAndLows ? recordHighsAndLows.lows : null}
            hotCold="cold"
          />
        </View>
      </ScrollView>
    );
}

export default Home;
