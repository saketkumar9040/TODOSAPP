import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loadUser, register } from "../redux/action";
import mime from "mime";
import userIcon from "../assets/userIcon.jpg";

const Register = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  console.log(phone)

  const handleImage = () => {
    navigation.navigate("camera", { updateProfile: false });
  };

  const registerHandler = async () => {
     try {
      if(!avatar){
        Alert.alert("Please Upload your profile Pic🤗");
        return;
      }
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
      // Alert.alert("user created successfully🤗","please verify your account in profile with otp send to your Email or user will be deleted")
     } catch (error) {
      console.log(error)
     }
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
        source={avatar ? { uri: avatar } : userIcon}
        style={styles.image}
      />
      <TouchableOpacity onPress={handleImage}>
        <Text style={styles.changeImageText}>Change Photo</Text>
      </TouchableOpacity>
     <Text style={{fontSize:17,color:"#900"}}>Please fill all the fields</Text>
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
          onChangeText={(e)=>e.length >10?Alert.alert("Sorry😮","Mobile number must be of 10 digits only"):setPhone(e)}
          keyboardType="numeric"
        />
      </View>
      <Button
        disabled={!email || !password || !name || !phone}
        style={!email || !password || !name || !phone?{...styles.button,backgroundColor:"#bfbfbf"}:styles.button}
        onPress={registerHandler}
      >
        <Text style={styles.buttonText}>Register</Text>  
      </Button>
      <Text style={{ marginTop: 20, color: "#900", fontSize: 18 }}>
        Already have an account !!!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={styles.loginText}>LOGIN</Text>
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
    // borderColor: "#b5b5b5",
    // justifyContent: "center",
    resizeMode:"center"
  },
  changeImageText: {
    color: "#900",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "#900",
    marginVertical: 20,
    borderRadius: 40,
    fontWeight:700,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#900",
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
  loginText: {
    color: "#900",
    height: 30,
    margin: 20,
    fontSize: 20,
    fontWeight: 700,
  },
});
