import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Assuming you've moved main.jpg to the assets folder in your Expo project
const Main = require('../../assets/images/main.jpg');

export default function Market() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={Main}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Location Based Crops Recommendation System</Text>
          <Text style={styles.subheading}>Choose your location and find out what is best for your location.</Text>
        </View>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop:60,
    // justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 2,
  },
  subheading: {
    fontSize: 18,
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