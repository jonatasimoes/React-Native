import * as Sentry from '@sentry/react-native';
import {useState, useEffect} from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';
import PickerItem from './src/Components/Picker';

import api from './src/services/api';

Sentry.init({
  dsn: 'https://7dce278eb7df19f62a3d2b27a0df7b8c@o4510828514836480.ingest.us.sentry.io/4510828521455616',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export default Sentry.wrap(function App() {
  const isDarkMode = useColorScheme() === 'light';
  const [loading, setLoading] = useState(true); // mudado aqui para true para roda a tela de loading
  const [moedas, setMoedas] = useState([]);

  const[moedaSelecionada, setMoedaSelecionada] = useState(null);


  useEffect(() => {
    async function loadMoedas() {
      setLoading(true);
      try {
        const response = await api.get('all');
        let arrayMoedas = Object.keys(response.data).map((key) => {
          return {
            key: key, // ou poderia ser só key, tambem funciona
            label: key,
            value: key,
          };
        });   
        

        setMoedas(arrayMoedas);
        setMoedaSelecionada(arrayMoedas[0].value);
        setLoading(false);

      } catch (error) {
        console.log('Erro ao carregar as moedas:', error);
        // Reporta o erro para o Sentry
        Sentry.captureException(error);

        // Mostra uma mensagem para o usuário
        if(error.response?.status === 429) {
          Alert.alert('Erro', 'Limite de requisições atingido. Por favor, tente novamente mais tarde.');
        };

      } finally {
        setLoading(false);
      };
    };

    loadMoedas();

  }, []);


  if (loading) {
    return (

      <View style={styles.loadMoedas}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.textoLoadgin}>Carregando...</Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <SafeAreaView style={styles.container}>

          <View style={styles.content}>
            <View style={styles.areaMoeda}>
              <Text style={styles.tiulo}>Seleciona a Moeda </Text>
              
              <PickerItem
                moedas={moedas}
                moedaSelecionada={moedaSelecionada}
                onChange={(itemValue) =>{ 
                    setMoedaSelecionada(itemValue);
                    console.log('Moeda selecionada:', itemValue);
                  }
                }
              />
            </View>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
});;

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
    fontWeight: '500',
    textAlign: 'center',
   },
    loadMoedas: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#101215'
    },
    textoLoadgin: {
      marginTop: 10,
      fontSize: 16,
      color: '#fff',
    }
});