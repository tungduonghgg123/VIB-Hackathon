import React, { useState } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import { SafeAreaView } from "react-native";
import VIBButton from "../../components/VIBButton";
import IconText from "../../components/icons/IconText";
import { Button } from "react-native-elements/dist/buttons/Button";
import * as Progress from "react-native-progress";

const Quizfixcost = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Progress.Bar
        progress={0.5}
        width={null}
        color="white"
        borderRadius={0}
      />
      <ScrollView contentContainerStyle={styles.transferContainer}>
        <Text style={styles.heading}>
          Trong tháng tới bạn sẽ có những khoản chi tiêu cố định nào?{" "}
        </Text>
        <View style={styles.root}>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>
              <IconText
                iconName="home"
                text="Tiền thuê nhà"
                color="black"
                direction="row"
              />
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="white"
              />
              <Text style={{ color: "white" }}>VND</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>
              <IconText
                iconName="movie"
                text="Tiền subscription"
                color="black"
                direction="row"
              />
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="white"
              />
              <Text style={{ color: "white" }}>VND</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>
              <IconText
                iconName="school"
                text="Tiền học phí"
                color="black"
                direction="row"
              />
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="white"
              />
              <Text style={{ color: "white" }}>VND</Text>
            </View>
          </View>
          <View style={styles.addButtonBox}>
            <Button
              style={styles.addButton}
              title="Thêm khoản khác +"
              titleStyle={{ fontSize: 15, color: "black" }}
            >
              {" "}
            </Button>
          </View>
        </View>
      </ScrollView>
      <VIBButton
        title="tiếp tục"
        onPress={() => navigation.navigate("Quizavecost")}
      />
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#0066B3",
  },
  heading: {
    color: "#FAA934",
    fontSize: 30,
  },
  transferContainer: {
    margin: 30,
    padding: 0,
    flex: 1,
  },
  root: {
    flexDirection: "column",
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 16,
  },
  text: {
    flex: 1,
    fontSize: 15,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    width: 160,
    height: 44,
    alignItems: "center",
    backgroundColor: "#004A82",
    paddingRight: 10,
  },
  textInput: {
    height: 44,
    width: 120,
    padding: 10,
    color: "white",
    fontSize: 18,
  },
  addButtonBox: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  addButton: {
    width: 150,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 30,
  },
};
export default Quizfixcost;
