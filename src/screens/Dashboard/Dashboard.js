import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {ImageBackground} from 'react-native';
const IMAGENAME = require('../../assets/Background.png');
// TODO: Change color for bottom and top SafeAreaView ; Crop the image => get rid of header
const Dashboard = ({navigation}) => {
  const [imageHeight, setImageHeight] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        onLayout={({nativeEvent}) => {
          setImageHeight(nativeEvent.layout.height);
        }}
        source={IMAGENAME}
        style={{
          flex: 1,
          resizeMode: 'stretch',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            height: (imageHeight * 3.3) / 11.5,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('AddExpense')}
            />
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('Transfer')}
            />
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => console.log('Thanh Toan QR')}
            />
          </View>
          <View style={{flex: 1}} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#102e58',
  },
};
export default Dashboard;
