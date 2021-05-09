import React, {useEffect, useState} from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import Contact from '../../components/icons/Contact';
import Card from '../../components/Card';
import IconText from '../../components/icons/IconText';
import SelectCategories from '../../components/SelectCategories';

const TransactionDetail = ({route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        // contentContainerStyle={{
        //   flexGrow: 1,
        //   backgroundColor: 'yellow',
        //   flexShrink: 0,
        // }}
        style={{flex: 1}}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        <Card style={styles.contactContainer}>
          <Contact
            realName="VU THI QUYNH HUONG"
            accountNumber="23102000"
            subTitleStyle={styles.contact}
            iconSize={31}
            disabled={true}
          />
        </Card>
        <Card style={styles.inputAmountContainer}>
          <TextInput
            style={styles.text}
            placeholderTextColor="#979797"
            placeholder="Nhập số tiền"
            keyboardType="numeric"
            returnKeyType="done"
          />
        </Card>
        <Card style={styles.balanceContainer}>
          <IconText color="black" iconName="account-balance-wallet" />
          <View style={{marginLeft: 26}}>
            <Text style={[styles.text]}>Từ tài khoản</Text>
            <Text style={styles.text}>
              23102000 - <Text style={{color: '#0066B3'}}>300,000 VND</Text>
            </Text>
          </View>
        </Card>
        <Card style={styles.inputAmountContainer}>
          <TextInput
            placeholderTextColor="#979797"
            style={styles.text}
            placeholder="Nội dung (không bắt buộc)"
          />
        </Card>
        <SelectCategories />
        <Card style={styles.inputAmountContainer}>
          <TextInput
            placeholderTextColor="#979797"
            style={styles.text}
            placeholder="Ghi chú (không bắt buộc)"
          />
        </Card>
      </View>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  contactContainer: {
    paddingLeft: 11,
    paddingTop: 0,
  },
  inputAmountContainer: {
    flex: 0.08,
    paddingLeft: 31,
    paddingTop: 0,
    justifyContent: 'center',
  },
  balanceContainer: {
    flex: 0.08,
    paddingLeft: 31,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contact: {
    fontSize: 15,
  },
  text: {
    fontSize: 13,
    color: '#979797',
  },
};
export default TransactionDetail;
