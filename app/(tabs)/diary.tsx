import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Assuming you've moved main.jpg to the assets folder in your Expo project
const Main = require('../../assets/images/main.jpg');

export default function Diary() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Business Diary</Text>
          <Text style={styles.subheading}>Incomes and Expenses</Text>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    flex:1,
    width: '100%',
    paddingTop: 60,
  },

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 8,
  },
  subheading: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#63cd15', 
    padding: 8,
    borderRadius: 12,
    width: 224,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});