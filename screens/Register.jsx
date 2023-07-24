import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loadUser, register } from "../redux/action";
import mime from "mime";
import userIcon from "../assets/userIcon.jpg"

const Register = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleImage = () => {
    navigation.navigate("camera", { updateProfile: false });
  };

  const registerHandler = async () => {
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("phone", phone);
    myForm.append("avatar", {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split("/").pop(),
    });
    await dispatch(register(myForm));
    dispatch(loadUser());
  };

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
      }
    }
  }, [route]);

  return (
    <View style={styles.registerContainer}>
      <Avatar.Image
        size={100}
        source={avatar ?{ uri: avatar }: userIcon}
        style={styles.image}
      />
      <TouchableOpacity onPress={handleImage}>
        <Text style={styles.changeImageText}>Change Photo</Text>
      </TouchableOpacity>

      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Enter phone"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <Button
        disabled={!email || !password || !name || !phone}
        style={styles.button}
        onPress={registerHandler}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={{ color: "#900", height: 30, margin: 20 }}>
          Have an Account, Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    margin: 20,
  },
  image: {
    backgroundColor: "#fff",
    // borderWidth: 2,
    borderColor: "#b5b5b5",
    justifyContent:"center"
  },
  changeImageText: {
    color: "#900",
    paddingHorizontal: 20,
    paddingVertical:5,
    borderWidth: 2,
    borderColor: "#900",
    marginVertical: 20,
    borderRadius:40,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#b5b5b5",
    padding: 2,
    paddingLeft: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 5,
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#900",
    paddingHorizontal: 5,
    width: "40%",
    marginTop: 10,
    borderRadius: 40,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 2,
  },
});
