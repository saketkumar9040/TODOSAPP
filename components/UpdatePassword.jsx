import { View, Text,StyleSheet,  } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux'
import {updatePassword} from '../redux/action';


const UpdatePassword = () => {
  
  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePasswordHandler = () => {
   dispatch(updatePassword(oldPassword, newPassword));
  }

  return (
    <View style={styles.updatePasswordContainer}>
      <Text style={styles.welcomeText}>Update your password</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Old Password"
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>
      <Button
        style={styles.button}
        onPress={changePasswordHandler}
        color="#fff"
      >
        UPDATE
      </Button>
    </View>
  );
}

export default UpdatePassword;

const styles = StyleSheet.create({
  updatePasswordContainer: {
    flex: 1,
    backgroundColor: "#6495ED",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight:800,
    margin: 20,
    color:"white",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 2,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 25,
  },
  button: {
    backgroundColor: "#900",
    marginTop:20,
    padding: 5,
    width: "70%",
    borderRadius:30,
  },
});
