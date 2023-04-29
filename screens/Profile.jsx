import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, TextInput, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout, updateProfile } from "../redux/action";
import mime from "mime";
import Loader from "../components/Loader";

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
  const submitHandler =async () => {
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("avatar", {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split("/").pop(),
    });
   await dispatch(updateProfile(myForm));
    dispatch(loadUser())
  };
  const logoutHandler = () => {
    dispatch(logout());
    navigation.navigate("login");
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
      <Avatar.Image
        size={100}
        source={{ uri: avatar }}
        style={{ backgroundColor: "#900" }}
      />
      <TouchableOpacity onPress={handleImage}>
        <Text style={{ color: "#900", padding: 10 }}>Change Photo</Text>
      </TouchableOpacity>

      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <Button style={styles.button} onPress={submitHandler}>
        <Text style={{ color: "#fff" }}>Update</Text>
      </Button>
      <Button
        color="rgb(50,50,50)"
        onPress={() => navigation.navigate("changePassword")}
      >
        Change Password
      </Button>
      <Button color="rgb(50,50,50)" onPress={logoutHandler}>
        Logout
      </Button>
      {user.verified ? null : (
        <Button onPress={() => navigation.navigate("verify")}>Verify</Button>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    margin: 10,
  },
});
