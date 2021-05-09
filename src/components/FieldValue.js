import React from 'react';
import {Text, View} from 'react-native';

const FieldValue = ({field, value, containerStyle, blueValue = false}) => {
  return (
    <View style={{flex: 0.06}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 11,
          flex: 1,
        }}>
        <Text style={styles.text}>{field}</Text>
        <Text style={{...styles.text, color: blueValue ? '#0066B3' : 'black'}}>
          {value}
        </Text>
      </View>
      <View style={styles.separater} />
    </View>
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
    flex: 0.05,
    paddingLeft: 11,
    borderRadius: 5,
  },
  pleaseConfirmText: {
    fontSize: 12,
    color: '#7A7A7A',
  },
  separater: {
    height: 1,
    backgroundColor: '#F2F2F2',
  },
  text: {fontSize: 14},
};
export default FieldValue;
