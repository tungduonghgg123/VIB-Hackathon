import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {ImageBackground} from 'react-native';
import LoadingOverlay from '../../components/LoadingOverlay';
const IMAGENAME = require('../../assets/Homescreen.png');

// TODO: Change color for bottom and top SafeAreaView ; Crop the image => get rid of header

const Dashboard = ({imageHeight, setImageHeight, loading, error, navigate}) => {
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
        <View style={{height: (imageHeight * 2.2) / 11.5, marginBottom: 300}}>
          <View style={styles.notificationBox}>
            <Text style={{textAlign: 'center'}}>Bắt đầu một tháng mới rồi</Text>
            <Text style={{textAlign: 'center'}}>
              bạn có muốn tạo ngân sách chi tiêu?
            </Text>
            <TouchableOpacity
              style={styles.notiButton}
              onPress={navigate('Quiz')}>
              <Text style={{color: 'white'}}>Tạo ngân sách chi tiêu</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: (imageHeight * 2.8) / 11.5,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => console.log('Tai khoan')}
            />
            <TouchableOpacity
              style={{flex: 1}}
              onPress={navigate('Transfer')}
            />
            <TouchableOpacity style={{flex: 1}} />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1}} />
            <TouchableOpacity style={{flex: 1}} />
            <TouchableOpacity
              style={{flex: 1}}
              onPress={navigate('Overview')}
            />
          </View>
        </View>
      </ImageBackground>
      <LoadingOverlay
        isVisible={loading || error ? true : false}
        shouldShowError={error}
      />
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#102e58',
  },
  notificationBox: {
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  notiButton: {
    backgroundColor: '#F6931D',
    borderRadius: 20,
    height: 46,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
};
export default Dashboard;
