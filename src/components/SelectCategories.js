/* eslint-disable no-sparse-arrays */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconText from './icons/IconText';
import Card from './Card';

const SelectCategories = ({
  setFullCategory,
  categories,
  placeholder,
  shouldChooseSubCategory = true,
}) => {
  const [selectedCategory, setCategory] = useState('');
  const [selectedSubCategory, setSubCategory] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  useEffect(() => {
    if (selectedCategory) {
      setFullCategory({
        name: selectedCategory,
        iconName: categories[selectedCategory].iconName,
        subCategoryName: selectedSubCategory || 'undefined',
        subCategoryIconName: selectedSubCategory
          ? categories[selectedCategory].subCategories.find(
              subCategory => subCategory.name === selectedSubCategory,
            ).iconName
          : 'undefined',
      });
    }
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
            if (!shouldChooseSubCategory) {
              onHeaderPress();
            }
          }}
        />
      </View>
    ));
    return shouldChooseSubCategory
      ? [...result, renderAddCategories('Danh mục mới')]
      : result;
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
            {selectedCategory || placeholder}
            {selectedSubCategory && ` - ${selectedSubCategory}`}
          </Text>

          <View style={{position: 'absolute', right: 10, flexDirection: 'row'}}>
            {((shouldChooseSubCategory && selectedSubCategory !== '') ||
              (!shouldChooseSubCategory && selectedCategory !== '')) && (
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
          {shouldChooseSubCategory && selectedCategory
            ? renderSubCategories()
            : renderCategories()}
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
    borderRadius: 5,
  },
};
export default SelectCategories;
