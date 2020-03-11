import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Lux from "@lespantsfancy/lux";

import Canvas from "./component/Canvas";

export default class App extends Lux.React.ReactorComponent {
    render() {        
        // return (
        //     <View style={ styles.container }>
        //         <Kanvas />
        //         <Text>Open up App.js to start working on your app!</Text>
        //     </View>
        // );
        return (
            <Canvas />
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
