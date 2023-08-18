import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>
                Home Screen
            </Text>
        </View>
    );
};

//<Button
//    title="Go to About"
//   onPress={() => navigation.navigate("About")}
///>