import { View,  StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';

const Footer = () => {

  const navigation = useNavigation();
    
  return (
    <View style={style.footerContainer}>
      <TouchableOpacity>
      <FontAwesome5 name="home" size={35} color="white"  onPress={()=>navigation.navigate("home")} />
      </TouchableOpacity>
      <TouchableOpacity>
      <FontAwesome5 name="user-alt" size={35} color="white" onPress={()=>navigation.navigate("profile")}/>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const style = StyleSheet.create({
  footerContainer: {
    padding: 20,
    backgroundColor: "#6495ED",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
