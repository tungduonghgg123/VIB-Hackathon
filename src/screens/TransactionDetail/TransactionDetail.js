import React, {useState} from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import Contact from '../../components/icons/Contact';
import Card from '../../components/Card';
import IconText from '../../components/icons/IconText';
import SelectCategories from '../../components/SelectCategories';
import VIBButton from '../../components/VIBButton';
import InputAmount from '../../components/InputAmount';
import SimpleTextInput from '../../components/SimpleTextInput';
import {categories} from '../../../fakeData';
const TransactionDetail = ({route, navigation}) => {
  const [amount, setAmount] = useState('');
  const [fullCategory, setFullCategory] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} keyboardShouldPersistTaps="handled">
        <Card style={styles.contactContainer}>
          <Contact
            realName={route.params?.realName}
            accountNumber={route.params?.accountNumber}
            subTitleStyle={styles.contact}
            iconSize={31}
            disabled={true}
          />
        </Card>
        <InputAmount amount={amount} setAmount={setAmount} />
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
        <SimpleTextInput placeholder="Nội dung (không bắt buộc)" />
        <SelectCategories
          categories={categories}
          setFullCategory={setFullCategory}
          placeholder="Chọn Danh mục chi tiêu hoặc Ngân sách được nạp"
        />
        <SimpleTextInput placeholder="Ghi chú cho khoản chi tiêu (không bắt buộc)" />
      </ScrollView>
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
    height: 87,
    justifyContent: 'center',
    paddingLeft: 11,
    paddingTop: 0,
  },
  inputAmountContainer: {
    height: 58,
    paddingLeft: 31,
    paddingTop: 0,
    justifyContent: 'center',
  },
  balanceContainer: {
    height: 58,
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
