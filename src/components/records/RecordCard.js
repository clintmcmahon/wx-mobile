import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";

function RecordCard({ temp, date, title, hotCold }) {
  const theme = useTheme();
  const getRecord = () => {
    if (temp !== null) {
      return (
        <View>
          <Text style={{ color: hotCold === "hot" ? theme.colors.heat : theme.colors.cold, fontWeight: "bold" }}>
            {title.toUpperCase()} {date ? `(${date.getFullYear()})` : ``}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: theme.colors.dark, marginTop: 5 }}>
            {temp}℉
          </Text>
        </View>
      )
    }
    else {
      return (
        <ActivityIndicator />
      )
    }
  }
  return (
    <View
      style={{
        backgroundColor: theme.colors.cardBackgroundColor,
        borderLeftColor: hotCold === "hot" ? theme.colors.heat : theme.colors.cold,
        borderLeftWidth: 5,
        padding: 20,
        borderRadius: 5
      }}>

      {getRecord()}
    </View>
  );
}

export default RecordCard;
