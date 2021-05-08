import React, {useEffect, useState} from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native';
import Contact from '../../components/icons/Contact';
import Card from '../../components/Card';
import IconText from '../../components/icons/IconText';

const TransactionDetail = ({route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
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
            placeholder="Nhập số tiền"
            keyboardType="numeric"
          />
        </Card>
        <Card style={styles.balanceContainer}>
          <IconText color="black" iconName="account-balance-wallet" />
        </Card>
        <Card style={styles.inputAmountContainer}>
          <TextInput
            style={styles.text}
            placeholder="Nội dung (không bắt buộc)"
          />
        </Card>
        <Card style={styles.inputAmountContainer}>
          <TextInput
            style={styles.text}
            placeholder="Ghi chú (không bắt buộc)"
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  contactContainer: {
    flex: 0.1,
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
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contact: {
    fontSize: 15,
  },
  text: {
    fontSize: 13,
  },
};
export default TransactionDetail;
