import React , {useEffect, useState, useCallback} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SafeAreaProvider, useSafeAreaProvider} from 'react-native-safe-area-context';

import MainTab from './src/components/MainTab';
import screens from './src/screens';
import { getToken } from './src/libs/auth';

const {
  HomeScreen,
  SearchScreen,
  MyLikeScreen,
  MyPageScreen,
  LoginScreen,
  ...restScreens
} = screens;

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [appToken, setAppToken ] = useState(null);
  const MainTabComp = useCallback((props) => { return (<MainTab {...props} setAppToken={setAppToken} />) },[setAppToken]);
  const LoginComp = useCallback((props) => { return (<LoginScreen {...props} setAppToken={setAppToken} />) },[setAppToken]);
  useEffect(() => {
    async function init() {
      const result = await getToken();
      setAppToken(result);
    }
    init();
  }, [])
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={appToken ? "MainTab" : "Login"}>
          {appToken ? <Stack.Screen name="MainTab" component={MainTabComp} options={{headerShown: false}}/> : <Stack.Screen name="Login" component={LoginComp} options={{headerShown: false}}/>}
          {Object.entries(restScreens).map(([name, component]) => (
            <Stack.Screen name={name} key={name} component={component} options={{headerShown: false}}/>
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;