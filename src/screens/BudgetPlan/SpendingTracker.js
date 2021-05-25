import React, {useState, useEffect} from 'react';
import {ScrollView, View, TextInput, Text, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Icon, withTheme} from 'react-native-elements';
import IconText from '../../components/icons/IconText';
import {TouchableOpacity} from 'react-native';
import {TouchableHighlight} from 'react-native';
import {useQuery} from '@apollo/client';
import {QUERY_SPENDING_TRACKER} from '../../model/query';
import moment from 'moment';
import {formatMoney} from '../../helper';

const SpendingTracker = ({route, navigation}) => {
  const {loading, error, data} = useQuery(QUERY_SPENDING_TRACKER, {
    fetchPolicy: 'no-cache',
  });
  const {monthlyTotalBudget, cash = 0, vib = 0, out = 0, ewallet = 0} =
    data?.user?.quizs?.[0] || {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.spendingOverview}>
        <View style={styles.spendingBox}>
          <View style={styles.spendingTitle}>
            <Text style={styles.textTitle}>Số dư đầu</Text>
            <Text style={styles.textMoney}>
              {formatMoney(monthlyTotalBudget)} VND
            </Text>
          </View>
        </View>
        <View style={styles.spendingBox}>
          <View style={styles.spendingTitle}>
            <Text style={styles.textTitle}>Số dư cuối</Text>
            <Text style={styles.textMoney}>
              {formatMoney(cash + vib + out + ewallet)} VND
            </Text>
          </View>
          <View style={styles.spendingDetail}>
            <View style={styles.iconText}>
              <Icon
                name="credit-card"
                type="material"
                color="white"
                size={10}
                style={{marginRight: 5}}
              />
              <Text style={styles.textCard}>Ngân sách trong thẻ VIB</Text>
            </View>
            <Text style={styles.textCardMoney}>{formatMoney(vib)} VND</Text>
          </View>
          <View style={styles.spendingDetail}>
            <View style={styles.iconText}>
              <Icon
                name="money"
                type="material"
                color="white"
                size={10}
                style={{marginRight: 5}}
              />
              <Text style={styles.textCard}>Ngân sách tiền mặt</Text>
            </View>
            <Text style={styles.textCardMoney}>{formatMoney(cash)} VND</Text>
          </View>
          <View style={styles.spendingDetail}>
            <View style={styles.iconText}>
              <Icon
                name="card-membership"
                type="material"
                color="white"
                size={10}
                style={{marginRight: 5}}
              />
              <Text style={styles.textCard}>Ngân sách ngoài VIB</Text>
            </View>
            <Text style={styles.textCardMoney}>{formatMoney(out)} VND</Text>
          </View>
          <View style={styles.spendingDetail}>
            <View style={styles.iconText}>
              <Icon
                name="account-balance-wallet"
                type="material"
                color="white"
                size={10}
                style={{marginRight: 5}}
              />
              <Text style={styles.textCard}>Ngân sách ví điện tử</Text>
            </View>
            <Text style={styles.textCardMoney}>{formatMoney(ewallet)} VND</Text>
          </View>
        </View>
      </View>
      <View style={styles.reportOverview}>
        <Image
          source={require('../../assets/Chart.png')}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.reportDetail}>
        {data?.user?.transactions && (
          <View key={Math.random() * 100} style={styles.dateBox}>
            <View style={styles.dateBoxTitle}>
              <Text>{moment().format('DD/MM/YYYY')}</Text>
              <Text style={{fontWeight: 'bold'}}>
                -
                {formatMoney(
                  data.user.transactions.reduce(
                    (cum, {amount}) => cum + amount,
                    0,
                  ),
                )}
                VND
              </Text>
            </View>
            {data?.user?.transactions.map(transaction => (
              <TouchableOpacity
                key={Math.random() * 100}
                style={styles.categoryBox}>
                <View style={{marginTop: 10}}>
                  <View style={styles.categoryBoxContent}>
                    <IconText
                      iconName={transaction.category.iconName}
                      text={transaction.category.name}
                      color="black"
                      direction="row"
                      iconSize={20}
                    />
                    <Text style={styles.categoryBoxContentText}>
                      - {transaction.note}
                    </Text>
                  </View>
                  <Text style={styles.categoryBoxMoney}>
                    -{formatMoney(transaction.amount)} VND
                  </Text>
                </View>
                <View>
                  <Icon
                    name="arrow-forward-ios"
                    type="material"
                    color="black"
                    size={15}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
      <View style={{flex: 1, marginRight: 40}}>
        <TouchableHighlight
          style={{position: 'absolute', bottom: 10, alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('AddExpense')}>
          <Icon name="add" style={styles.icon} size={40} color="white" />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spendingOverview: {
    backgroundColor: '#FAA934',
    height: 126,
    paddingHorizontal: 30,
  },
  spendingTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spendingDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -3,
  },
  spendingBox: {
    marginTop: 10,
  },
  textTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  textMoney: {
    fontWeight: '700',
    fontSize: 14,
    color: '#0066B3',
  },
  textCardMoney: {
    fontSize: 10,
    color: '#0066B3',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  textCard: {
    fontSize: 10,
    color: 'white',
  },
  dateBoxTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 5,
    backgroundColor: '#F2F2F2',
    height: 40,
  },
  categoryBox: {
    height: 70,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBoxContentText: {
    marginLeft: 5,
    color: 'grey',
    fontSize: 10,
  },
  categoryBoxMoney: {
    color: '#0066B3',
    marginTop: 5,
  },
  reportTitle: {
    textAlign: 'center',
    fontSize: 15,
  },
  reportOverview: {
    height: 200,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  buttonCallout: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'blue',
  },
  icon: {
    backgroundColor: '#0066B3',
    borderRadius: 45,
  },
};
export default SpendingTracker;
