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
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Transfer from './src/screens/Transfer/Transfer';
import InternalTransfer from './src/screens/InternalTransfer/InternalTransfer';
import TransactionDetail from './src/screens/TransactionDetail/TransactionDetail';
import Confirm from './src/screens/Confirm/Confirm';
import AddExpense from './src/screens/AddExpense/AddExpense';
import {TouchableOpacity, Text} from 'react-native';
import QuizController from './src/screens/Quiz/QuizController';
import FixBudget from './src/screens/BudgetPlan/FixBudget';
import SpendingTracker from './src/screens/BudgetPlan/SpendingTracker';

import {ApolloProvider} from '@apollo/client/react';
import client from './src/model';
import DashboardController from './src/screens/Dashboard/DashboardController';
import OverviewController from './src/screens/BudgetPlan/OverviewController';
import NonFixBudgetController from './src/screens/BudgetPlan/NonFixBudgetController';

const Stack = createStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
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
              component={DashboardController}
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
            <Stack.Screen
              name="Quiz"
              component={QuizController}
              options={{
                title: 'Tạo ngân sách chi tiêu',
              }}
            />
            <Stack.Screen
              name="Overview"
              component={OverviewController}
              options={({navigation}) => ({
                title: 'Quản lý tài chính',
                headerLeft: props => (
                  <HeaderBackButton
                    {...props}
                    onPress={() => navigation.popToTop()}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="FixBudget"
              component={FixBudget}
              options={{
                title: 'Chi tiêu cố định',
              }}
            />
            <Stack.Screen
              name="NonFixBudget"
              component={NonFixBudgetController}
              options={{
                title: 'Kế hoạch chi tiêu',
              }}
            />
            <Stack.Screen
              name="SpendingTracker"
              component={SpendingTracker}
              options={{
                title: 'Sổ chi tiêu',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
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
