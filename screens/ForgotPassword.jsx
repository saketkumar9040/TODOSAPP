import { View, Text, StyleSheet, TouchableOpacity , } from 'react-native'
import React,{useState} from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../redux/action';

const ForgotPassword = ({navigation}) => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state =>state.message)

    const [email, setEmail] = useState("");

    const submitHandler = () => {
        dispatch(forgotPassword(email));
        navigation.navigate("resetPassword")
    
    }
  return (
    <View style={styles.forgotPasswordContainer}>
      <Text style={styles.welcomeText}>Forgot password </Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
        />
      </View>
      <Button style={styles.button} onPress={submitHandler} color="#fff" disabled={loading}>
        SUBMIT
      </Button>
    
    </View>
  );
}

export default ForgotPassword;


const styles = StyleSheet.create({
  forgotPasswordContainer: {
    flex: 1,
    backgroundColor: "#6495ED",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 35,
    fontWeight:800,
    margin: 20,
    color: "#fff",
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
    borderRadius:40,
  },
});
