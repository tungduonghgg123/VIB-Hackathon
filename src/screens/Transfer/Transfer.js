import React, {useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import IconText from '../../components/icons/IconText';
import {SearchBar} from 'react-native-elements';
import CollapsibleCategory from './CollapsibleCategory';
import data from '../../../fakeData';
const Transfer = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.transferOptionsContainer}>
        <IconText iconName="account-balance" text="Trong VIB" />
        <IconText iconName="account-balance" text="Ngoài VIB" />
        <IconText iconName="account-balance" text="Đầu tư" />
      </View>
      <ScrollView style={{flex: 0.9}}>
        <View style={styles.searchBarWrapper}>
          <SearchBar
            placeholder="Tìm kiếm người thụ hưởng"
            value={search}
            onChangeText={setSearch}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            lightTheme={true}
          />
        </View>
        {data.map(category => (
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
    // WHY 15
    borderRadius: 15,
    margin: 20,
    marginVertical: 20,
  },
};
export default Transfer;
