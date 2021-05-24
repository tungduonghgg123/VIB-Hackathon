import React, {useState} from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import VIBButton from '../../components/VIBButton';
import {Icon} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/core';

const Quizgoal = ({onPressNext}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Progress.Bar
        progress={100}
        width={null}
        color="white"
        borderRadius={0}
      />
      <ScrollView contentContainerStyle={styles.transferContainer}>
        <Text style={styles.heading}>
          Mục tiêu nào bạn đang muốn đạt được cùng VIB?
        </Text>
        <View style={styles.root}>
          <View style={styles.rowContainer}>
            <Text style={styles.text}> Kỳ nghỉ dưỡng </Text>
            <Icon
              name="local-airport"
              type="material"
              color="black"
              size={40}
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}> Mua xe ô tô </Text>
            <Icon name="electric-car" type="material" color="black" size={40} />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}> Mua nhà </Text>
            <Icon name="house" type="material" color="black" size={40} />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}> Học hành </Text>
            <Icon name="school" type="material" color="black" size={40} />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}> Mua điện thoại </Text>
            <Icon name="phone-iphone" type="material" color="black" size={40} />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}> Khác </Text>
          </View>
        </View>
      </ScrollView>
      <VIBButton
        title="tiếp tục"
        onPress={() => {
          onPressNext();
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
  heading: {
    color: '#FAA934',
    fontSize: 30,
  },
  transferContainer: {
    margin: 30,
    padding: 0,
    flex: 1,
  },
  root: {
    flexDirection: 'column',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 16,
  },
  text: {
    flex: 1,
    fontSize: 15,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 160,
    height: 44,
    alignItems: 'center',
    backgroundColor: '#004A82',
    paddingRight: 10,
  },
  textInput: {
    height: 44,
    width: 120,
    padding: 10,
    color: 'white',
    fontSize: 18,
  },
  addButtonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  addButton: {
    width: 150,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 30,
  },
};
export default Quizgoal;
