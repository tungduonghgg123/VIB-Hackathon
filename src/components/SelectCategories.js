/* eslint-disable no-sparse-arrays */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconText from './icons/IconText';
import Card from './Card';
import {categories} from '../../fakeData';

const SelectCategories = ({setFullCategory}) => {
  const [selectedCategory, setCategory] = useState('');
  const [selectedSubCategory, setSubCategory] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  useEffect(() => {
    setFullCategory(selectedCategory + ' - ' + selectedSubCategory);
  }, [selectedCategory, selectedSubCategory, setFullCategory]);
  const onHeaderPress = () => setIsCollapsed(!isCollapsed);
  const renderAddCategories = title => (
    <View key={title} style={{marginVertical: 11}}>
      <IconText
        iconName="add-circle-outline"
        text={title}
        direction="row"
        disabled={true}
        color="#F7941D"
      />
    </View>
  );
  const renderCategories = () => {
    const result = Object.keys(categories).map(category => (
      <View key={category} style={{marginVertical: 11}}>
        <IconText
          color="black"
          iconName={categories[category].iconName}
          text={category}
          direction="row"
          onPress={() => {
            setCategory(category);
          }}
        />
      </View>
    ));
    return [...result, renderAddCategories('Danh mục mới')];
  };
  const renderSubCategories = () => {
    const result = categories[selectedCategory].subCategories.map(
      subCategory => (
        <View key={subCategory.name} style={{marginVertical: 11}}>
          <IconText
            color="black"
            iconName={subCategory.iconName}
            text={subCategory.name}
            direction="row"
            onPress={() => {
              setSubCategory(subCategory.name);
              onHeaderPress();
            }}
          />
        </View>
      ),
    );
    return [...result, renderAddCategories('Danh mục con mới')];
  };
  return (
    <>
      {/*TODO:  weird behaviour happens when using array style */}
      <Card style={{...styles.container, marginBottom: isCollapsed ? 11 : -7}}>
        <TouchableOpacity onPress={onHeaderPress} style={styles.header}>
          <Text style={styles.text}>
            {selectedCategory ||
              'Chọn Danh mục chi tiêu hoặc Ngân sách được nạp'}
            {selectedSubCategory && ` - ${selectedSubCategory}`}
          </Text>

          <View style={{position: 'absolute', right: 10, flexDirection: 'row'}}>
            {selectedSubCategory !== '' && (
              <IconText
                iconName="clear"
                color="black"
                onPress={() => {
                  setSubCategory('');
                  setCategory('');
                }}
              />
            )}
            <IconText
              iconName={isCollapsed ? 'expand-more' : 'expand-less'}
              direction="row"
              color="black"
              onPress={onHeaderPress}
            />
          </View>
        </TouchableOpacity>
      </Card>
      {!isCollapsed && (
        <View style={styles.collapsible}>
          {selectedCategory ? renderSubCategories() : renderCategories()}
        </View>
      )}
    </>
  );
};
const styles = {
  container: {
    height: 58,
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
    backgroundColor: 'white',
    marginHorizontal: 11,
    marginBottom: 11,
    paddingBottom: 11,
    // If delete below line, the view above it will be shrinked
    flex: 0.4,
    borderRadius: 5,
  },
};
export default SelectCategories;
