
import React, {useEffect, useState} from 'react';
import { FlatList, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import api from './src/services/api';
import Filmes from './src/Filmes';
import Header from './src/Componets/Header';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [filmes, setFilme] = useState([]);

  useEffect(()=> {

    async function loadFilme() {
      const respost = await api.get('r-api/?api=filmes');
      setFilme(respost.data);
    };

    loadFilme();

  }, [])


  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  
        <FlatList 
          data={filmes}
          keyExtractor={ item=> String(item.id)} // convertendo o id para String devido o FlastLit aceita o id com String e não como Number
          renderItem={({item}) => <Filmes data={item}/>}
          ListHeaderComponent={<Header/>}
        />
     
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9d40dcdb'
  },
});

export default App;
