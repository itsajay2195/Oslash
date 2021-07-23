import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({textLabel, onPress,padding,marginHorizontal}) => {
  
 
    return (
        <View style={styles.container}>
        <TouchableOpacity  onPress={()=>onPress()}
          style={[styles.button]}>
          <Text style={[styles.text]}>{textLabel}</Text>
        </TouchableOpacity>
      </View>

      );
}
 
export default Button;

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      margin:2
    },
    button: {
      backgroundColor: '#3897f0',
      padding: 15,
      borderRadius: 5,
    },
    text: {
      color: '#ffff',
      textAlign: 'center',
    },
  });