import React from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  BarChart
} from "react-native-chart-kit";

function RecordChart({ data, date, title, hotCold }) {
  const theme = useTheme();
  const screenWidth = Dimensions.get("window").width - 50;
  const primaryColor = hotCold === "hot" ? theme.colors.heat : theme.colors.cold
  return (
    <View
      style={{
        backgroundColor: theme.colors.cardBackgroundColor,
        borderLeftColor: primaryColor,
        borderLeftWidth: 5,
        padding: 20,
        borderRadius: 5
      }}>
      <View>
        <Text style={{ marginBottom: 5, color: primaryColor, fontWeight: "bold" }}>
          {title.toUpperCase()}
        </Text>
        {data &&
          <BarChart
            data={data}
            width={screenWidth}
            height={300}
            yAxisSuffix="°F"
            chartConfig={{
              color: (opacity = 1) => theme.colors.dark,
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              fillShadowGradientFrom: primaryColor,
              fillShadowGradientFromOpacity: "1",
              fillShadowGradientTo: primaryColor,
              fillShadowGradientToOpacity: "1",
              barPercentage: 0.9,
              useShadowColorFromDataset: false,
              decimalPlaces: 0
            }}
            verticalLabelRotation={0}
            showValuesOnTopOfBars={true}
            withInnerLines={false}
            fromZero={true}
            style={{ transform: [{ translateX: -20 }] }}

          />
        }
        {!data &&
          <ActivityIndicator />
        }
      </View>
    </View>
  );
}

export default RecordChart;
