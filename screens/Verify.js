import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { loadUser ,otpVerify} from '../redux/action';

const Verify = () => {
    const dispatch = useDispatch()

    const [otp, setOtp] = useState("");

    const verifyHandler = async() =>  {
        await dispatch(otpVerify(otp));
        await dispatch(loadUser());       
    }

  return (
    <View style={styles.verifyContainer}>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType='number-pad'
        />
      </View>
      <Button 
      style={styles.button}
      onPress={verifyHandler}
      >
        <Text style={{color:"#fff"}}> VERIFY</Text>
      </Button>
    </View>
  );
}

export default Verify;

const styles = StyleSheet.create({
  verifyContainer: {
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
    borderRadius: 20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    marginVertical: 5,
    fontSize: 22,
    marginBottom:20,
  },
  button: {
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
  },
});
