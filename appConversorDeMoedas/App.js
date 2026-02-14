import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import * as Sentry from '@sentry/react-native';

import Home from './src/Components/pages/home';


Sentry.init({
  dsn: 'https://6fea595aa2a47c782241f9c335d3532d@o4510828514836480.ingest.us.sentry.io/4510840838946816',

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

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [loading, setLoading] = useState(false)

  return (
    <NavigationContainer>
      <SafeAreaProvider >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home />      
    </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Sentry.wrap(App);