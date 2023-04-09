import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';

interface Item{
  item:{
    id:string | number[],
    text:string
  },
  deleteItem: ( id: string | number[] ) => void
}

const ListItem = ( {item, deleteItem}:Item ) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          {item.text}
        </Text>
        <Text style={styles.Cross}onPress={()=>deleteItem(item.id)} >X </Text>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem:{
    padding:15,
    backgroundColor:'#f8f8f8',
    borderBottomWidth:1,
    borderColor:'#eee'
  },

  listItemView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  listItemText:{
    fontSize: 18
  },
  Cross:{
    fontSize:18,
    color:'red'
  }
})

export default ListItem