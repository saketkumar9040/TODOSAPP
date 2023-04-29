import { View,  StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native'

const Footer = () => {

  const navigation = useNavigation();
    
  return (
    <View style={style.footerContainer}>
      <TouchableOpacity>
        <Icon name="home" size={30} color="#900" onPress={()=>navigation.navigate("home")}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" size={30} color="#900" onPress={()=>navigation.navigate("profile")}/>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const style = StyleSheet.create({
  footerContainer: {
    padding: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
