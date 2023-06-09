import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, resetPassword } from '../redux/action';

const ResetPassword = ({navigation}) => {

    const { message, error} = useSelector(state => state.message);

    const dispatch = useDispatch();

    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const resetHandler = async() => {
       await dispatch(resetPassword(otp,newPassword));
        navigation.navigate("login");
    }

    useEffect(() => {
      if(message){
        alert(message)
        dispatch({type:"clearMessage"})
      }
      if(error){
        alert(error)
        dispatch({type:"clearError"})
      }
    }, [alert,message,dispatch,error])
    
    
  return (
    <View style={styles.resetPasswordContainer}>
      <Text style={styles.welcomeText}>Reset password </Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType='number-pad'
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your  New Password"
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>
      <Button style={styles.button} onPress={resetHandler} color="#fff" disabled={!otp || ! newPassword}>
       <Text style={{fontSize:20,color:"#fff"}}>SUBMIT</Text>
      </Button>
    </View>
  );
}

export default ResetPassword;


const styles = StyleSheet.create({
  resetPasswordContainer: {
    flex: 1,
    backgroundColor: "#6495ED",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 35,
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
    fontSize: 20,
  },
  button: {
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
    borderRadius:40,
  },
});
