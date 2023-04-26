import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import React, { useState } from 'react'
import Task from './components/Task'

const App = () => {


  const [task, setTask] = useState();
  const [taskArr,setTaskArr] = useState([])

  const handleAddTask = () => {
    setTaskArr([...taskArr,task]);
    setTask(null);
    console.warn(taskArr)
  }

  const deleteItem = (index) => {
    let itemsCopy = [...taskArr];
    itemsCopy.splice(index,1);
    setTaskArr(itemsCopy);
    console.warn(taskArr)
  }


  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.titleText}>Today's Tasks</Text>

        <View style={styles.items}>
          {
            taskArr.map((item,index) => {
              return (
                <TouchableOpacity onPress={() => deleteItem(index)} key={index}>
                  <Task text = {item} ></Task>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView

        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}

      >
        <TextInput style={styles.input} placeholder='Write a task' onChangeText={text => setTask(text)} value={task}></TextInput>
        <TouchableOpacity onPress={ event => handleAddTask(event) }
         
       >

          <View style = {styles.plusCember}>

            <Text style={styles.addText}>+</Text>

          </View>

        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper: {

    paddingTop: 20,
    paddingHorizontal: 20,

  },
  items: {

  },
  writeTaskWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


  },
  input: {
    width: 200,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,

  },
  plusCember : {
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center',
  }

})

export default App