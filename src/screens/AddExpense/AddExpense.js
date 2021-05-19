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
import IconText from '../../components/icons/IconText';
const AddExpense = ({route, navigation}) => {
  const {amount, fullCategory, accountNumber, realName} = route.params || {};
  const [value, setValue] = useState(-1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <IconText
          iconName="mic"
          iconSize={77}
          color="#0066B3"
          onPress={() => console.log('ahihi')}
        />
      </View>
      <Text style={styles.text}>
        Sử dụng giọng nói để thêm khoản chi tiêu nhanh chóng hơn!
      </Text>
      <Text style={styles.text}>Hoặc nhập tay khoản chi tiêu</Text>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  iconWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 97,
    width: 97,
    borderRadius: 68,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 17,
    color: 'white',
    fontSize: 12,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  input: {fontSize: 14},
  inputLabel: {fontSize: 12, fontWeight: '400'},
};
export default AddExpense;
