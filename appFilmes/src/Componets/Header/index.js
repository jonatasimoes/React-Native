import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Header() {
    const img = require('../../img/MyFlme-logo.png');
    return (
        <SafeAreaView style={styles.header}>
            <Image source={img}
                style={{width: 125, height:100}} 
            />

            
        </SafeAreaView>
    );  
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1
    }
});