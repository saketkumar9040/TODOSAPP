import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout, updateProfile } from "../redux/action";
import mime from "mime";
import Loader from "../components/Loader";
import { StatusBar } from "expo-status-bar";

const Profile = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const [avatar, setAvatar] = useState(user.avatar.url);
  const [name, setName] = useState(user.name);

  const handleImage = () => {
    navigation.navigate("camera", {
      updateProfile: true,
    });
  };
  const submitHandler = async () => {
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("avatar", {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split("/").pop(),
    });
    await dispatch(updateProfile(myForm));
    dispatch(loadUser());
  };
  const logoutHandler = async () => {
    await dispatch(logout());
  };

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
      }
    }
  }, [route]);

  return loading ? (
    <Loader />
  ) : (
    <View style={styles.profileContainer}>
      <StatusBar style="light" />
      <Avatar.Image
        size={100}
        source={{ uri: avatar }}
        style={{ marginBottom: 20, backgroundColor: "transparent" }}
      />
      <TouchableOpacity onPress={handleImage} style={{ marginBottom: 30 }}>
        <Text
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: 18,
            backgroundColor: "#6495ED",
          }}
        >
          Change Photo
        </Text>
      </TouchableOpacity>

      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
      </View>
      <Button style={styles.button} onPress={submitHandler}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Update</Text>
      </Button>
      <Button
        color="white"
        onPress={() => navigation.navigate("changePassword")}
      >
        <Text
          style={{
            color: "white",
            padding: 10,
            fontWeight: 700,
            fontSize: 18,
            elevation: 20,
            backgroundColor: "#6495ED",
            borderRadius: 20,
          }}
        >
          Change Password
        </Text>
      </Button>
      <TouchableOpacity style={{borderWidth:2,borderColor:"#fff",borderRadius:40,marginTop:20,}} onPress={logoutHandler}>
        <Text style={{ color:'#fff',fontSize: 20,fontWeight:700,paddingHorizontal:20, }}>LOGOUT</Text>
      </TouchableOpacity>
      {user.verified ? null : (
        <TouchableOpacity onPress={() => navigation.navigate("verify")}>
          <Text
            style={{
              fontSize: 25,
              color: "#fff",
              borderWidth: 2,
              borderColor: "#fff",
              paddingHorizontal:40,
              marginTop:30,
              borderRadius:40,
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#6495ED",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 2,
    paddingVertical:10,
    borderColor: "#900",
    paddingLeft: 15,
    marginVertical: 5,
    fontSize: 22,
    marginBottom: 20,
    borderRadius:10,
  },
  button: {
    backgroundColor: "#900",
    // padding: 5,
    width: "60%",
    margin: 10,
    elevation: 10,
    borderRadius: 50,
  },
});
