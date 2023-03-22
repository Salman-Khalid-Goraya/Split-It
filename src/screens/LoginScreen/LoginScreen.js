import {
  StyleSheet,
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "../../components/HeaderText";
import SecondaryLightText from "../../components/SecondaryLightText";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [focused, setFocused] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", width: "100%" }}>
        {/* Logo */}
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        {/* Welcome Back text */}
        <HeaderText text="Welcome Back👋" />
        <HeaderText text="Glad to see you back!" />
        <SecondaryLightText text="Login to your own account" />
        {/* Email input */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          onFocus={() => setFocused("email")}
          style={[
            styles.inputContainer,
            { borderColor: focused === "email" ? "#2940C8" : "#fff" },
          ]}
          placeholder="Email"
        />
        {/* Password input */}
        <TextInput
          value={password}
          onChangeText={setPassword}
          onFocus={() => setFocused("password")}
          style={[
            styles.inputContainer,
            { borderColor: focused === "password" ? "#2940C8" : "#fff" },
          ]}
          placeholder="Password"
          secureTextEntry={true}
        />
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", width: "100%" }}>
        {/* or login with text */}
        <Text style={styles.dividerText}>Or continue with</Text>
        {/* Social Login */}
        <View style={styles.socialContainer}>
          <View style={styles.socialLoginButton}>
            <Image
              source={require("../../assets/Googlelogo.png")}
              style={styles.socialLoginImage}
            />
            <Text style={styles.socialLoginText}>Google</Text>
          </View>
          <View style={styles.socialLoginButton}>
            <Image
              source={require("../../assets/Facebooklogo.png")}
              style={styles.socialLoginImage}
            />
            <Text style={styles.socialLoginText}>Facebook</Text>
          </View>
        </View>
        {/* Bottom Divider */}
        <View style={styles.divider}></View>
        <View style={styles.bottomTextContainer}>
          <Text style={[styles.bottomText, { fontWeight: "300" }]}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.bottomText,
                {
                  fontWeight: "600",
                  textDecorationLine: "underline",
                  color: "#2940C8",
                },
              ]}
            >
              Register here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  inputContainer: {
    padding: 13,
    backgroundColor: "#f4f6f8",
    borderRadius: 10,
    borderWidth: 1.5,
    marginBottom: 20,
    width: "100%",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    shadowColor: "black",
  },
  logo: {
    width: 120,
    resizeMode: "contain",
    height: 120,
    marginBottom: 30,
  },
  dividerText: {
    fontSize: 14,
    fontWeight: "300",
  },
  socialContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  socialLoginButton: {
    width: "48%",
    alignItems: "center",
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 33,
    borderColor: "#D0D0CF",
    flexDirection: "row",
    justifyContent: "center",
  },
  socialLoginImage: {
    height: 27,
    resizeMode: "contain",
    marginRight: 5,
  },
  socialLoginText: {
    fontWeight: "600",
    fontSize: 15,
  },
  divider: {
    width: "100%",
    borderWidth: 0.75,
    borderColor: "#E7E8E7",
    borderRadius: 30,
  },
  bottomTextContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: "#2940C8",
    width: "100%",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});
