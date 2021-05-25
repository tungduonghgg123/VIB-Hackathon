import React, {useState} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import IconText from './IconText';
import {useNavigation} from '@react-navigation/native';
const Contact = ({
  nickname = '',
  realName = '',
  accountNumber = '',
  bank = '',
  titleStyle,
  subTitleStyle,
  iconSize,
  disabled = false,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled}
      onPress={() =>
        navigation.navigate('InternalTransfer', {
          receiver: {
            realName,
            accountNumber,
            nickname,
            bank,
          },
        })
      }>
      <IconText iconName="account-circle" color="#0066B3" iconSize={iconSize} />
      <View style={styles.textContainer}>
        {nickname ? (
          <Text style={titleStyle || styles.titleDefaultStyle}>{nickname}</Text>
        ) : null}
        {realName ? (
          <Text style={subTitleStyle || styles.subTitleDefaultStyle}>
            {realName}
          </Text>
        ) : null}
        {accountNumber ? (
          <Text style={subTitleStyle || styles.subTitleDefaultStyle}>
            {accountNumber}
          </Text>
        ) : null}
        {bank ? (
          <Text style={subTitleStyle || styles.subTitleDefaultStyle}>
            {bank}
          </Text>
        ) : null}
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
  titleDefaultStyle: {
    fontSize: 12,
  },
  subTitleDefaultStyle: {
    fontSize: 10,
    color: '#7A7A7A',
  },
};
export default Contact;
