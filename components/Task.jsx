import { View, Text ,StyleSheet } from 'react-native'
import React ,{useDebugValue, useState} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { deleteTask, loadUser, updateTask } from '../redux/action';

const Task = ( { title, description , status , taskId}) => {

    const dispatch = useDispatch()

    const [completed, setCompleted] = useState(status);

    const handleCheckbox = async() =>{
        setCompleted(!completed);
       await dispatch(updateTask(taskId))
        
    }

    const deleteHandler = async() =>{
       await dispatch(deleteTask(taskId))
        dispatch(loadUser())
    }

  return (
    <View style={style.container}>
       <View style={{ width: "70%"}}>
            <Text style={style.title}>
                  {title}
            </Text>
            <Text style={style.description}>
                 {description}
            </Text>
       </View>
       <Checkbox
           status={completed ? "checked" : "unchecked"}
           color='#474747'
           onPress={handleCheckbox}
       />
       <Icon
          name='delete'
          color="#fff"
          size={20}
          style={{
             backgroundColor:"#900",
             padding:10,
             borderRadius:100
          }}
          onPress={deleteHandler}
       
       />

    </View>
  )
}

export default Task;

const style = StyleSheet.create({
    container:{
        padding:10,
        paddingLeft:15,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"cornsilk",
        justifyContent:"space-evenly",
        borderRadius:30,
        marginVertical:10,
        marginHorizontal:15,
    },
    title:{
        fontSize:22,
        marginVertical:7,
        fontWeight:700,
        color:"#900"
    },
    description:{
        fontSize:18,
        color:"#000",
        fontWeight:700,
    }
})