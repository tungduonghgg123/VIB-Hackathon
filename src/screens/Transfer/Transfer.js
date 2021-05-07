import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import IconText from '../../components/icons/IconText';
import {SearchBar} from 'react-native-elements';
import Collapsible from 'react-native-collapsible';

const Transfer = () => {
  const [search, setSearch] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.transferOptionsContainer}>
        <IconText iconName="account-balance" text="Trong VIB" />
        <IconText iconName="account-balance" text="Ngoài VIB" />
        <IconText iconName="account-balance" text="Đầu tư" />
      </View>
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
      <Collapsible collapsed={isCollapsed} />
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
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
