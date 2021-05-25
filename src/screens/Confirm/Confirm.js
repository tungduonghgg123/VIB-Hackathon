import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import VIBButton from '../../components/VIBButton';
import {SafeAreaView} from 'react-native';
import FieldValue from '../../components/FieldValue';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {MAKE_TRANSACTION} from '../../model/query';
import {useMutation} from '@apollo/client';
var radio_props = [
  {label: 'Lưu thông tin người thụ hưởng', value: 'WITHOUT_CATEGORY'},
  {
    label: 'Lưu thông tin người thụ hưởng kèm Danh mục chi tiêu',
    value: 'WITH_CATEGORY',
  },
];

const Confirm = ({route, navigation}) => {
  const [makeTransaction, {data, loading, error}] = useMutation(
    MAKE_TRANSACTION,
  );
  const {amount, category} = route.params || {};
  const {accountNumber, realName, bank} = route.params?.receiver || {};
  const [nickname, setNickname] = useState('');

  const [value, setValue] = useState('NO');
  const onRadioButtonPress = newValue => {
    newValue === value ? setValue('NO') : setValue(newValue);
  };
  if (data) {
    navigation.navigate('Transfer');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.transferContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.pleaseConfirmContainer}>
          <Text style={styles.pleaseConfirmText}>
            Vui lòng kiểm tra thông tin trước khi xác nhận
          </Text>
        </View>
        <FieldValue field="Số tiền" value={`${amount} VND`} blueValue />
        <FieldValue field="Từ tài khoản" value="23102000" />
        <FieldValue
          field="Danh mục chi tiêu"
          value={category?.name + ' - ' + category?.subCategoryName}
        />
        <View style={styles.separater} />
        <FieldValue field="Tên tài khoản" value={realName} />
        <FieldValue field="Số tài khoản" value={accountNumber} />
        <FieldValue field="Ngân hàng" value={bank} />
        <FieldValue field="Phí giao dịch" value="0 VND" blueValue />
        <RadioForm style={{marginTop: 10}}>
          {radio_props.map((obj, i) => (
            <RadioButton key={i}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={value === obj.value}
                onPress={onRadioButtonPress}
                borderWidth={1}
                buttonInnerColor={'#0066B3'}
                buttonOuterColor={'#0066B3'}
                buttonSize={10}
                buttonOuterSize={18}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 11}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={onRadioButtonPress}
                labelStyle={{
                  fontSize: 14,
                  width: Dimensions.get('window').width * 0.9,
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                }}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
        {value !== 'NO' && (
          <View
            style={{
              ...styles.pleaseConfirmContainer,
              marginHorizontal: 11,
              height: 30,
            }}>
            <TextInput
              value={nickname}
              onChangeText={setNickname}
              style={styles.pleaseConfirmText}
              placeholderTextColor="#979797"
              placeholder="Đặt tên cho người thụ hưởng theo ý thích (không bắt buộc)"
            />
          </View>
        )}
      </ScrollView>
      <VIBButton
        title="xác nhận"
        onPress={() => {
          makeTransaction({
            variables: {
              transaction: {
                from: 'VIB',
                ...route.params,
                receiver: {
                  bank,
                  nickname,
                  realName,
                  accountNumber,
                },
              },
              saveMode: value,
            },
          });
        }}
      />
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  transferContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 11,
    padding: 0,
    flex: 1,
  },
  pleaseConfirmContainer: {
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    height: 50,
    paddingLeft: 11,
    borderRadius: 5,
  },
  pleaseConfirmText: {
    fontSize: 12,
    color: '#7A7A7A',
  },
  separater: {
    height: 8,
    backgroundColor: '#F2F2F2',
  },
  input: {fontSize: 14},
  inputLabel: {fontSize: 12, fontWeight: '400'},
};
export default Confirm;
