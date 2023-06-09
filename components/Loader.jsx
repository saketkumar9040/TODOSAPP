import { View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper';

const Loader = () => {
  return (
    <View
      style={{ backgroundColor:"#6495ED" ,flex:1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator animating={true} size={100} color='#900'/>
    </View>
  );
}

export default Loader