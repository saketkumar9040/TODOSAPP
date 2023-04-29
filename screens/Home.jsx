import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Task from "../components/Task";
import Icon from "react-native-vector-icons/Entypo";
import { Dialog, Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addTask, loadUser } from "../redux/action";

const Home = ({ navigation }) => {

  const dispatch= useDispatch();

  const { user } =useSelector(state => state.auth)
  const { message,error,loading} = useSelector(state => state.message);

  const [openDialog, setopenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const hideDialog = () => {
    setopenDialog(!openDialog);
  };

  const addTaskHandler = () => {
     dispatch(addTask(title,description))
     dispatch(loadUser())
  };

  useEffect(() => {
   if(error){
    alert(error);
    dispatch({type:"clearError"})
   }
   if(message){
    alert(message);
    dispatch({type:"clearMessage"})
   }
  }, [alert,message,dispatch,error])
  

  return (
    <>
      <View style={style.container}>
        <ScrollView>
          <SafeAreaView>
            <Text style={style.heading}>ALL TASKS</Text>
            {user && user.tasks.map((item) => (
              <Task
                key={item._id}
                title={item.title}
                description={item.description}
                status={item.completed}
                taskId={item._id}
              />
            ))}
            <TouchableOpacity style={style.addButton} onPress={hideDialog}>
              <Icon name="add-to-list" size={20} color="#900" />
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </View>
      <Dialog visible={openDialog} onDismiss={hideDialog}>
        <Dialog.Title>ADD A TASK</Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={style.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={style.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={hideDialog}>
              <Text>CANCEL</Text>
            </TouchableOpacity>
            <Button onPress={addTaskHandler} color="#900" disabled={ !title || !description || loading }>
              ADD
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  heading: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#474747",
  },
  addButton: {
    backgroundColor: "#fff",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
});
