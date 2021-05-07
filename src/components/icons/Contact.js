import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import IconText from './IconText';

const Contact = ({
  nickname = '',
  realName = '',
  accountNumber = '',
  bank = '',
}) => {
  return (
    <View style={styles.container}>
      <IconText iconName="account-circle" color="#0066B3" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{nickname}</Text>
        <Text style={styles.subTitle}>{realName}</Text>
        <Text style={styles.subTitle}>{accountNumber}</Text>
        <Text style={styles.subTitle}>{bank}</Text>
      </View>
    </View>
  );
};
const styles = {
  container: {
    paddingVertical: 20,
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
