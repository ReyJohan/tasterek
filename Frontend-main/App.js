import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './components/AppNavigator';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
