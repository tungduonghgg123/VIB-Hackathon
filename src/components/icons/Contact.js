import React, {useState} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import IconText from './IconText';
import {useNavigation} from '@react-navigation/native';
const Contact = ({
  nickname = '',
  realName = '',
  accountNumber = '',
  bank = '',
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('InternalTransfer', {
          realName,
          accountNumber,
        })
      }>
      <IconText iconName="account-circle" color="#0066B3" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{nickname}</Text>
        <Text style={styles.subTitle}>{realName}</Text>
        <Text style={styles.subTitle}>{accountNumber}</Text>
        <Text style={styles.subTitle}>{bank}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  container: {
    paddingVertical: 14,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 9.4,
  },
  title: {
    fontSize: 12,
  },
  subTitle: {
    fontSize: 10,
    color: '#7A7A7A',
  },
};
export default Contact;
