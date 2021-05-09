import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconText from './icons/IconText';
import Card from './Card';
import {categories} from '../../fakeData';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const SelectCategories = () => {
  const [category, setCategory] = useState(
    'Chọn Danh mục chi tiêu hoặc Ngân sách được nạp',
  );
  const [subCategory, setSubCategory] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const onHeaderPress = () => setIsCollapsed(!isCollapsed);
  return (
    <>
      <Card style={styles.container}>
        <TouchableOpacity onPress={onHeaderPress} style={styles.header}>
          <Text style={styles.text}>{category}</Text>
          <View style={{position: 'absolute', right: 10}}>
            <IconText
              iconName={isCollapsed ? 'expand-more' : 'expand-less'}
              direction="row"
              color="black"
              onPress={onHeaderPress}
            />
          </View>
        </TouchableOpacity>
      </Card>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.collapsible}>
          {categories.map(_category => (
            <View key={_category.name} style={{marginVertical: 11}}>
              <IconText
                color="black"
                iconName={_category.iconName}
                text={_category.name}
                direction="row"
                onPress={() => {
                  setCategory(_category.name);
                  onHeaderPress();
                }}
              />
            </View>
          ))}
        </View>
      </Collapsible>
    </>
  );
};
const styles = {
  container: {
    flex: 0.08,
    justifyContent: 'center',
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 31,
  },
  text: {
    fontSize: 13,
    color: '#979797',
  },
  collapsible: {
    alignItems: 'flex-start',
    paddingLeft: 31,
    backgroundColor: 'pink',
    flex: 0.2,
  },
};
export default SelectCategories;