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
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Transfer from './src/screens/Transfer/Transfer';
import InternalTransfer from './src/screens/InternalTransfer/InternalTransfer';
import TransactionDetail from './src/screens/TransactionDetail/TransactionDetail';
import Confirm from './src/screens/Confirm/Confirm';
const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
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
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen
            name="Transfer"
            component={Transfer}
            options={{
              title: 'Chuyển tiền',
            }}
          />
          <Stack.Screen
            name="InternalTransfer"
            component={InternalTransfer}
            options={{
              title: 'Chuyển khoản trong VIB',
            }}
          />
          <Stack.Screen
            name="TransactionDetail"
            component={TransactionDetail}
            options={{
              title: 'Chi tiết giao dịch',
            }}
          />
          <Stack.Screen
            name="Confirm"
            component={Confirm}
            options={{
              title: 'Xác nhận thông tin',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
