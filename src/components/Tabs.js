import React, {useState} from 'react';
import {Tab} from 'react-native-elements';
import {InternalTransferOptions} from '../../fakeData';

const Tabs = () => {
  const [tab, setTab] = useState(0);
  return (
    <Tab onChange={setTab} value={tab} indicatorStyle={styles.indicatorStyle}>
      {InternalTransferOptions.map(option => (
        <Tab.Item
          key={option}
          titleStyle={styles.tabTitle}
          buttonStyle={styles.tab}
          containerStyle={styles.tabContainer}
          title={option}
        />
      ))}
    </Tab>
  );
};
const styles = {
  indicatorStyle: {
    backgroundColor: '#F7941D',
    width: 80,
    height: 3,
    left: 25,
  },
  tabTitle: {
    fontSize: 12,
    color: 'black',
  },
  tab: {
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  tabContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
};
export default Tabs;
