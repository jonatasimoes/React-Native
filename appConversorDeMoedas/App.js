import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';


import PickerItem from './src/Components/Picker';

export default function App() {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <SafeAreaView style={styles.container}>

          <View style={styles.content}>
            <View style={styles.areaMoeda}>
              <Text style={styles.tiulo}>Seleciona a Moeda </Text>
              
              <PickerItem />
            </View>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
  },
  content: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  areaMoeda: {
    backgroundColor: '#f9f9f9',
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 8,
   },
   tiulo: {
    fontSize: 16,
    color: '#000',
    fontWeight: '5000',
    textAlign: 'center',
   },
});
