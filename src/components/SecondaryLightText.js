import { StyleSheet, Text } from "react-native";
import React from "react";

const SecondaryLightText = (props) => {
  return <Text style={styles.secondaryText}>{props.text}</Text>;
};

export default SecondaryLightText;

const styles = StyleSheet.create({
  secondaryText: {
    fontSize: 15,
    marginVertical: 15,
    fontWeight: "300",
    color: "#1b1d2a",
    textAlign: "center",
  },
});
