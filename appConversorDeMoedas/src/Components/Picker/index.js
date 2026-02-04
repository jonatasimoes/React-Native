import React from "react";
import { Picker } from '@react-native-picker/picker';


export default function PickerItem({ moedas = [], moedaSelecionada, onChange }) {

  const moedasItem = moedas.map((item) => {
    return <Picker.Item value={item.value} key={item.key} label={item.label} />
  })

  return (
        <Picker
          selectedValue={moedaSelecionada ?? ''}
          onValueChange={(itemValue) => onChange(itemValue)}
        >
            <Picker.Item label="Selecione..." value="" key="placeholder" />
            {moedasItem}
        </Picker>
  );
}