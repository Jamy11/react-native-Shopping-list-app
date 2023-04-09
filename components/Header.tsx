import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface HeaderProps {
    title: string;
  }

const Header = ( {title}:HeaderProps ) => {
  return (
    <View style={styles.header}>
        <Text style={styles.text} >
            {title}
        </Text>
    </View>
  )
}

Header.defaultProps ={
    title:"Shopping List for you"
}

const styles = StyleSheet.create({
    header:{
        height:60,
        padding:15,
        backgroundColor: 'darkslateblue'
    },
    text:{
        color:'#fff',
        fontSize:23,
        textAlign: 'center',
    }
})

export default Header