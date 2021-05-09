import React, {useEffect, useState} from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import Contact from '../../components/icons/Contact';
import Card from '../../components/Card';
import IconText from '../../components/icons/IconText';
import SelectCategories from '../../components/SelectCategories';
import VIBButton from '../../components/VIBButton';
const TransactionDetail = ({route, navigation}) => {
  const [amount, setAmount] = useState('');
  const [fullCategory, setFullCategory] = useState('');

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
            realName={route.params?.realName}
            accountNumber={route.params?.accountNumber}
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
            onChangeText={text => {
              setAmount(
                text
                  .replace(/,/g, '')
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'),
              );
            }}
            value={amount}
          />
        </Card>
        <Card style={styles.balanceContainer}>
          <IconText color="black" iconName="account-balance-wallet" />
          <View style={{marginLeft: 26}}>
            <Text style={[styles.text]}>Từ tài khoản</Text>
            <Text style={styles.text}>
              002098444416 -
              <Text style={{color: '#0066B3'}}> 300,000,000 VND</Text>
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
        <SelectCategories setFullCategory={setFullCategory} />
        <Card style={styles.inputAmountContainer}>
          <TextInput
            placeholderTextColor="#979797"
            style={styles.text}
            placeholder="Ghi chú (không bắt buộc)"
          />
        </Card>
      </View>
      <VIBButton
        title="tiếp tục"
        onPress={() =>
          navigation.navigate('Confirm', {
            amount,
            fullCategory,
            accountNumber: route.params?.accountNumber,
            realName: route.params?.realName,
          })
        }
      />
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
