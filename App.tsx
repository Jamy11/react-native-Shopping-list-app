import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    { id: uuid.v4(), text:'Milk'  },
    { id: uuid.v4(), text:'Eggs' },
    { id: uuid.v4(), text:'Bread' },
    { id: uuid.v4(), text:'Juice' },
  ])

  const deleteItem = (id:string|number[]) =>{
    setItems( prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  const addItem = ( textValue:string ) =>{
    if(!textValue){
      Alert.alert('Error','Please add something',[{text:'Got It'}])
      return 
    }
    setItems( prevItems => {
      return [...prevItems,{id: uuid.v4(), text:textValue}]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item})=>
       <ListItem item={item} deleteItem={deleteItem}/> } />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60
  }
})

export default App;