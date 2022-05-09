import React from "react";
import { View, Text } from "react-native";

function RecordHigh({ temp, date }) {
  return (
    <View>
      <Text>
        {temp} - {date.getFullYear()}
      </Text>
    </View>
  );
}

export default RecordHigh;
