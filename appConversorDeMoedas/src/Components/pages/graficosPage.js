import React  from "react";
import { View, Text, StyleSheet,} from "react-native";

export default function Graficos() {
    return (
        <View style={styles.conteiner}>
            <Text>
                Graficos
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})