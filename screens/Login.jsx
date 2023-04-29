import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action";

const Login = ({ navigation }) => {
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
      <Text style={styles.welcomeText}>WELCOME</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button
        disabled={!email || !password}
        style={styles.button}
        onPress={loginHandler}
      >
        <Text style={{ color: "#fff" }}>LOGIN</Text>
      </Button>
      <Text style={{ marginTop: 20 }}>Or</Text>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={{ color: "#900", height: 30, margin: 20 }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
        <Text style={{  height: 30, marginTop: 50 }}>Forgot Password ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    margin: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 2,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
  },
});
