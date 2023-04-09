import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

interface Item{
  item:{
    id:string | number[],
    text:string
  }
}

const ListItem = ( {item}:Item ) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          {item.text}
        </Text>
        <Icon name='facebook' size={20} color='firebrick' />
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
  }
})

export default ListItem