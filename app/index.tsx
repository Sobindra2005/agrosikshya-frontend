import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Link } from "expo-router";

// Assuming you've moved main.jpg to the assets folder in your Expo project
const Main = require('../assets/images/main.jpg');

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={Main}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>के तपाईं कृषिमा रुचि राख्नुहुन्छ?</Text>
          <Text style={styles.subheading}>यदि तपाइँ इच्छुक हुनुहुन्छ भने</Text>
        </View>
        <Link  style={styles.button}
          href={'/market'}
          >
          <Text style={styles.buttonText}>यो लिङ्क क्लिक गर्नुहोस्</Text>
        </Link>
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
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 8,
  },
  subheading: {
    fontSize: 20,
    color: 'white',
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