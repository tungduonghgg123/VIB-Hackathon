import React, {useState} from 'react';
import {View} from 'react-native';
import IconText from '../../components/icons/IconText';
import Collapsible from 'react-native-collapsible';
import Contact from '../../components/icons/Contact';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CollapsibleCategory = ({
  name = '',
  iconName = '',
  subCategories = [],
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onHeaderPress = () => setIsCollapsed(!isCollapsed);
  return (
    <View>
      <TouchableOpacity onPress={onHeaderPress} style={styles.header}>
        <IconText
          iconName={iconName}
          text={name}
          direction="row"
          color="black"
          onPress={onHeaderPress}
        />
        <IconText
          iconName={isCollapsed ? 'expand-more' : 'expand-less'}
          direction="row"
          color="black"
          onPress={onHeaderPress}
        />
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        {subCategories.map(subCategory => (
          <View key={Math.random() * 100} style={styles.collapsibleContainer}>
            {subCategory.name && (
              <View style={{alignSelf: 'center'}}>
                <IconText
                  iconName={subCategory.iconName}
                  text={subCategory.name}
                  color="black"
                  direction="row"
                />
              </View>
            )}
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
