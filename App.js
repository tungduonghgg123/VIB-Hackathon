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
import Dashboard from './src/screens/Dashboard/Dashboard';
import Confirm from './src/screens/Confirm/Confirm';
import AddExpense from './src/screens/AddExpense/AddExpense';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
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
            name="Dashboard"
            component={Dashboard}
            options={{
              headerShown: false,
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
          <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{
              title: 'Thêm khoản chi tiêu',
              headerLeft: props => (
                <TouchableOpacity {...props}>
                  <Text style={styles.headerLeft}>Huỷ</Text>
                </TouchableOpacity>
              ),
              headerRight: props => (
                <TouchableOpacity {...props}>
                  <Text style={styles.headerRight}>Lưu</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const styles = {
  headerLeft: {
    fontSize: 14,
    marginLeft: 18,
    color: 'white',
  },
  headerRight: {
    fontSize: 14,
    color: '#F7941D',
    marginRight: 18,
  },
};
export default App;
