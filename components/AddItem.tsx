import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

interface AddItemProps{
  addItem: (textValue:string) => void
} 


const AddItem = ({addItem}:AddItemProps) => {
  const [text, setText] = useState('')

  const onChange = (textValue:string) =>{
    setText(textValue)
  }

  return (
    <View>
      <TextInput placeholder='Add Item...' style={styles.input} onChangeText={onChange}/>
      <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
        <Text style={styles.btnText} >
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    height:60,
    padding:8,
    fontSize: 16
  },
  btn:{
    backgroundColor: '#c3bad8' ,
    margin: 10,
    padding: 5
  },
  btnText:{
    fontSize: 20,
    color:'darkslateblue',
    textAlign: 'center'
  }
})

export default AddItem