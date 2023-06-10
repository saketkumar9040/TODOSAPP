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
        <Text style={{ color: "#fff",fontSize:24, }}>LOGIN</Text>
      </Button>
      <Text style={{ marginTop: 20,fontSize:24,color:"#fff" }}>Or</Text>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={{ color: "#fff", margin: 20,fontSize:25,fontWeight:800, }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
        <Text style={{ color: "#fff", margin: 20,fontSize:25,fontWeight:400, }}>Forgot Password ?</Text>
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
    fontSize: 45,
    fontWeight:700,
    margin: 20,
    color:"#fff"
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 2,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 22,
  },
  button: {
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
    borderRadius:40,
  },
});
