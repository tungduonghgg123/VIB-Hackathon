import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import IconText from '../../components/icons/IconText';
import {SearchBar} from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import Contact from '../../components/icons/Contact';

const CollapsibleCategory = ({
  name = '',
  iconName = '',
  subCategories = [],
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <View>
      <View style={styles.header}>
        <IconText
          iconName={iconName}
          text={name}
          direction="row"
          color="black"
        />
        <IconText
          iconName={isCollapsed ? 'expand-more' : 'expand-less'}
          direction="row"
          color="black"
          onPress={() => setIsCollapsed(!isCollapsed)}
        />
      </View>

      <Collapsible collapsed={isCollapsed}>
        {subCategories.map(subCategory => (
          <View key={Math.random() * 100} style={styles.collapsibleContainer}>
            <View style={{alignSelf: 'center'}}>
              <IconText
                iconName={subCategory.iconName}
                text={subCategory.name}
                color="black"
                direction="row"
              />
            </View>
            {subCategory.contacts.map(contact => (
              <Contact key={Math.random() * 100} {...contact} />
            ))}
          </View>
        ))}
      </Collapsible>
    </View>
  );
};
const styles = {
  header: {
    height: 39,
    backgroundColor: '#F2F2F2',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  collapsibleContainer: {
    paddingTop: 14,
  },
};
export default CollapsibleCategory;
