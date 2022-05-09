import React from 'react';
import { SafeAreaView, View } from 'react-native';

export const Screen = (props) => {
    const { children } = props;
    const containerStyle = {
        flex: 1
    };
    const innerContainerStyle = {
        padding: 10
    }

    return (
        <SafeAreaView style={containerStyle}>
            <View style={innerContainerStyle}>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default Screen;