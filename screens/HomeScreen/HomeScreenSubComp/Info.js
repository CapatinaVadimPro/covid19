import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../../../constants/Colors";

import Header, { headerHeight } from "../../../components/Header";
import { getGeneralData } from "../../../API";

const InfoComp = ({ navigation, route }) => {
  const [data, setData] = useState({});

  const getData = async () => {
    const data = await getGeneralData();
    setData(data[2]);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      <View style={styles.body}>
        <Text></Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey
  },
  text: {
    fontSize: 30,
    marginTop: 1,
    color: Colors.lightBlue
  },

  body: {
    marginTop: Platform.OS === "android" ? 25 + headerHeight : headerHeight
  }
});
export default InfoComp;
