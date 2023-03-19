import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { windowHeight, windowWidth } from "../utility/mobilesizes";
import { NextIcon } from "../design/icons";
import { TouchableOpacity } from "react-native";

const OnBoardingScreen1 = () => {
  return (
    <Onboarding
      containerStyles={styles.container}
      subTitleStyles={styles.subtitle}
      titleStyles={styles.title}
      imageContainerStyles={styles.imageContainer}
      bottomBarColor="#fff"
      SkipButtonComponent={SkipButton}
      showNext={false}
      DotComponent={DotComponent}
      DoneButtonComponent={DoneButton}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/OnBoarding2.png")}
              style={styles.OnboardingImage}
            />
          ),
          title: "Split Bills Painlessly",
          subtitle:
            "Simply input an amount of money spent, select who participated in the expense and let the app do all work.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/OnBoarding1.png")}
              style={styles.OnboardingImage}
            />
          ),
          title: "Plan Your Budget",
          subtitle:
            "Keep track of your joint expenses together. Add expenses and settle debts in any convenient currency",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/OnBoarding3.png")}
              style={styles.OnboardingImage}
            />
          ),
          title: "Cloud Backup & Sync",
          subtitle:
            "Never loose your data, even if you decide to change your phone. Sync data every time when you connect internet",
        },
      ]}
    />
  );
};

const SkipButton = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.SkipButton} {...props}>
      <Text style={styles.skipButtonText}>Get Started!</Text>
      <NextIcon size={24} color="#fff" />
    </TouchableOpacity>
  );
};
const DotComponent = ({ selected }) => {
  let width;
  width = selected ? 20 : 6;

  return (
    <View
      style={{
        width,
        height: 6,
        borderRadius: 6,
        marginHorizontal: 3,
        backgroundColor: "#1b1d2a",
      }}
    />
  );
};

const DoneButton = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.DoneButton} {...props}>
      <Text style={styles.skipButtonText}>Get Started!</Text>
      <NextIcon size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default OnBoardingScreen1;

const styles = StyleSheet.create({
  OnboardingImage: {
    width: (windowWidth / 3) * 2.3,
    height: (windowHeight / 3) * 1.5,
    resizeMode: "contain",
  },
  container: {
    paddingTop: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2940C8",
    lineHeight: 26,
    letterSpacing: 0.6,
  },

  imageContainer: {
    paddingBottom: 0,
  },

  subtitle: {
    fontSize: 15,
    textAlign: "left",
    lineHeight: 24,
    fontWeight: "400",
    color: "#1b1d2a",
  },

  SkipButton: {
    width: (windowWidth / 2) * 1.2,
    backgroundColor: "#2940C8",
    padding: 20,
    paddingVertical: 17,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    left: (windowWidth / 2) * 0.8,
    bottom: 70,
  },

  skipButtonText: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1,
    color: "#fff",
  },

  DoneButton: {
    width: (windowWidth / 2) * 1.2,
    backgroundColor: "#2940C8",
    padding: 20,
    paddingVertical: 17,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 70,
  },
});
