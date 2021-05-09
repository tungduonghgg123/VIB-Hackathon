import React, {useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import IconText from '../../components/icons/IconText';
import {SearchBar} from 'react-native-elements';
import CollapsibleCategory from './CollapsibleCategory';
import {contactByCategories} from '../../../fakeData';
const Transfer = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.transferOptionsContainer}>
        <IconText
          iconName="account-balance"
          text="Trong VIB"
          onPress={() => navigation.navigate('InternalTransfer')}
        />
        <IconText iconName="account-balance" text="Ngoài VIB" />
        <IconText iconName="assessment" text="Đầu tư" />
      </View>
      <ScrollView style={{flex: 0.9}}>
        <View style={styles.searchBarWrapper}>
          <SearchBar
            placeholder="Tìm kiếm người thụ hưởng"
            value={search}
            onChangeText={setSearch}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={{
              fontSize: 14.4,
            }}
            lightTheme={true}
          />
        </View>
        {contactByCategories.map(category => (
          <CollapsibleCategory key={Math.random() * 100} {...category} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  transferOptionsContainer: {
    backgroundColor: '#FAA934',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchBarWrapper: {
    flex: 0.1,
    backgroundColor: 'red',
  },
  searchBarContainer: {
    backgroundColor: 'white',
    borderColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  searchBarInputContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 39,
  },
};
export default Transfer;
