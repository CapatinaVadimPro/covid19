import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import axios from "axios";

import Colors from "../../../constants/Colors";

import Header, { headerHeight } from "../../../components/Header";

const InfoComp = ({ navigation, route }) => {
  const [info, setData] = useState([]);


  const getData = async () => {
    const res = await axios.get("http://localhost:1337/all");
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      <View style={styles.body}>
        {info.map(i => (
          <Text>{i.title} -> {i.number}</Text>))}
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
