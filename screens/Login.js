import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import todoImage from "../assets/robot.png";

const Login = ({ navigation }) => {
  NavigationBar.setBackgroundColorAsync("#6495ED");
  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch, alert]);

  return (
    <View style={styles.loginContainer}>
      <StatusBar style="light" />
      <Text style={styles.welcomeText}>WELCOME</Text>
      <Image source={todoImage} style={styles.logo} />
      <View style={{ width: "80%", }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
      </View>
      <Button
        disabled={!email || !password}
        style={styles.button}
        onPress={loginHandler}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>LOGIN</Text>
      </Button>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
        <Text
          style={{ color: "#fff", margin: 20, fontSize: 25, fontWeight: 400 }}
        >
          Forgot Password ?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#6495ED",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 500,
    // margin: 20,
    color: "#fff",
    letterSpacing: 5,
  },
  logo: {
    height: 200,
    width: 200,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#900",
    paddingLeft: 20,
    paddingVertical:15,
    borderRadius:10,
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#900",
    // padding: 5,
    marginTop: 20,
    width: "60%",
    borderRadius: 40,
  },
  orText: {
    marginTop: 20,
    fontSize: 20,
    color: "#fff",
  },
  signUpText: {
    color: "#fff",
    margin: 20,
    fontSize: 25,
    fontWeight: 800,
    borderWidth: 2,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderColor: "#fff",
  },
});
