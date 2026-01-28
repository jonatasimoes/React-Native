
import React, {useEffect, useState} from 'react';
import { FlatList, StatusBar, StyleSheet,Image, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import api from './src/services/api';
import Filmes from './src/Filmes';
import Header from './src/Componets/Header';

export default function App() {
  const [filmes, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  
  useEffect(()=> {

    async function loadFilme() {
      const respost = await api.get('r-api/?api=filmes');
      setFilme(respost.data);

      setTimeout(()=> {
        setLoading(false);
      },3000)
    };

    loadFilme();

  }, []);

  if(loading) { 
    return( 
      <SafeAreaProvider>
        <SafeAreaView edges={['top']} style={styles.loadingContainer}>
          <Image

            source={require('./src/img/MyFlme-loading.png')}
            style={styles.imgLoading}
          />
          <ActivityIndicator color="#fff" size="large" />
        </SafeAreaView>
      </SafeAreaProvider>

    );

  };

    return (
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}  style={styles.container}>
          <StatusBar />
          
            <FlatList
              data={filmes}
              keyExtractor={ item=> String(item.id)} // convertendo o id para String devido o FlastLit aceita o id com String e não como Number
              renderItem={({item}) => <Filmes data={item}/>}
              ListHeaderComponent={<Header/>}
            />
        </SafeAreaView>
      </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#3a3838'
  },
  imgLoading: {
    width: 150,
    height: 150,
    resizeMode: 'contain'  // Mantém proporção da imagem
  },
  
  container: {
    flex: 1,
    backgroundColor: '#3a3838'
  },
});
