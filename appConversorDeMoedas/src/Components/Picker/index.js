import React from "react";
import { View, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';


export default function PickerItem() {
  return (
    <View>
        <Picker>
            <Picker.Item value='BTC' key={0} label="BTC" />
        </Picker>
    </View>
  );
}