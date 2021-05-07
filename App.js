/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Transfer from './src/screens/Transfer/Transfer';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Transfer"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0066B3',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{
            title: 'Chuyển tiền',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
