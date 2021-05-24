import React, { useState, useEffect } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";
import * as Progress from "react-native-progress";
import IconText from "../../components/icons/IconText";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native";

const NonFixBudget = ({ route, navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Tháng", value: "month" },
    { label: "Tuần", value: "week" },
    { label: "Ngày", value: "day" },
  ]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0.6);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calendarFilterBox}>
        <View style={styles.calendarFilter}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Tháng"
            dropDownContainerStyle={{
              borderColor: "#0066B3",
            }}
            style={{
              borderColor: "#0066B3",
              height: 30,
            }}
          />
        </View>
      </View>
      <View style={styles.transferContainer}>
        <View style={styles.root}>
          <View style={styles.progressCircle}>
            <Progress.Circle size={80} progress={progress} showsText={true} />
            <Text style={[styles.textReminder, { color: "red" }]}>
              {" "}
              Bạn cẩn thận không tiêu quá ngân sách tháng này nhé!{" "}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.categoryTitle}>
          <View style={styles.categoryTitleBox}>
            <View style={styles.categoryTitleDetail}>
              <IconText
                iconName="shopping-cart"
                text="Mua sắm"
                color="black"
                direction="row"
                iconSize={30}
              />
              <Text style={styles.textMoney}>1.000.000 VNĐ</Text>
            </View>
            <Progress.Bar progress={0.7} width={320} color="#FAA934" />
          </View>
        </View>
        <TouchableOpacity style={styles.categoryBox}>
          <View>
            <View style={styles.categoryBoxContent}>
              <IconText
                iconName="checkroom"
                text="Quần áo"
                color="black"
                direction="row"
                iconSize={20}
              />
              <Text style={styles.categoryBoxContentText}>
                {" "}
                - Mua áo Madelen
              </Text>
            </View>
            <Text style={styles.categoryBoxMoney}> -700.000 VNĐ</Text>
          </View>
          <View>
            <Icon
              name="arrow-forward-ios"
              type="material"
              color="black"
              size={15}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.categoryTitle}>
          <View style={styles.categoryTitleBox}>
            <View style={styles.categoryTitleDetail}>
              <IconText
                iconName="restaurant"
                text="Ăn uống"
                color="black"
                direction="row"
                iconSize={30}
              />
              <Text style={styles.textMoney}>500.000 VNĐ</Text>
            </View>
            <Progress.Bar progress={0.5} width={320} color="#FAA934" />
          </View>
        </View>
        <TouchableOpacity style={styles.categoryBox}>
          <View>
            <View style={styles.categoryBoxContent}>
              <IconText
                iconName="local-dining"
                text="Nhà hàng"
                color="black"
                direction="row"
                iconSize={20}
              />
              <Text style={styles.categoryBoxContentText}>
                {" "}
                - Ăn tại Bún chả Nghĩa Tân
              </Text>
            </View>
            <Text style={styles.categoryBoxMoney}> -150,000 VNĐ</Text>
          </View>
          <View>
            <Icon
              name="arrow-forward-ios"
              type="material"
              color="black"
              size={15}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <View>
            <View style={styles.categoryBoxContent}>
              <IconText
                iconName="local-cafe"
                text="Cafe"
                color="black"
                direction="row"
                iconSize={20}
              />
              <Text style={styles.categoryBoxContentText}>
                {" "}
                - Uống cafe ở The Coffee House với Thu
              </Text>
            </View>
            <Text style={styles.categoryBoxMoney}> -100,000 VNĐ</Text>
          </View>
          <View>
            <Icon
              name="arrow-forward-ios"
              type="material"
              color="black"
              size={15}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  transferContainer: {
    margin: 30,
    height: 90,
    marginTop: -20,
  },
  root: {
    flexDirection: "column",
    flex: 1,
  },
  progressCircle: {
    paddingTop: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textReminder: {
    fontSize: 11,
    marginTop: 3,
    color: "gray",
    width: 130,
    textAlign: "right",
  },
  contentNumber: {
    color: "#1890FF",
    fontWeight: "bold",
    fontSize: 20,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
    alignItems: "center",
  },
  categoryTitle: {
    marginTop: 5,
  },
  categoryTitleBox: {
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    height: 60,
    flexDirection: "column",
    paddingHorizontal: 30,
    justifyContent: "space-evenly",
  },
  categoryTitleDetail: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryBox: {
    height: 80,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryBoxContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryBoxContentText: {
    color: "grey",
    fontSize: 12,
  },
  categoryBoxMoney: {
    color: "#0066B3",
    marginTop: 5,
  },
  textMoney: {
    textAlign: "right",
    flex: 1,
    color: "#0066B3",
    marginRight: 10,
    fontWeight: "bold",
  },
  calendarFilterBox: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  calendarFilter: {
    width: 100,
  },
};
export default NonFixBudget;
