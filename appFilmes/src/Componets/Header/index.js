import React from "react";
import {View, StyleSheet, Image} from "react-native";


export default function Header() {
    const img = require('../../img/MyFlme-logo.png');
    return (
        <View style={styles.header}>
            <Image source={img}
                style={styles.imgLogo} 
            />            
        </View>
    );  
};

const styles = StyleSheet.create({
    imgLogo: {
        width: 200,
        height: 51,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        marginBottom: 5,
        paddingTop: 5,

    }
});