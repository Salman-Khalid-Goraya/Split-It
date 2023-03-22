import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderText = (props) => {
  return <Text style={styles.headerText}>{props.text}</Text>;
};

export default HeaderText;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    color: "#2940C8",
    fontWeight: "600",
    letterSpacing: 1.2,
    width: "80%",
    textAlign: "center",
  },
});
