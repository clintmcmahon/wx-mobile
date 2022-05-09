import React from "react";
import {View, Text} from "react-native";

function RecordHigh({temp}){
    return(
        <View>
            <Text>
                {temp}
            </Text>
        </View>
    )
}

export default RecordHigh;