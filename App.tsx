import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {UserContextProvider} from './src/context/UserContext';
import {StatusBar} from 'react-native';
const queryClient = new QueryClient();

function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={MyTheme}>
          <StatusBar backgroundColor="#fff8ee" barStyle="dark-content" />
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
    </UserContextProvider>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#fff8ee',
  },
};
export default App;
