import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import {  router } from "expo-router";

type LanguageContent = {
  lang: 'Nepali' | 'English';
  name: string;
  description: string;
};

const languageOptions: LanguageContent[] = [
  {
    lang: 'Nepali',
    name: 'यदि तपाइँ इच्छुक हुनुहुन्छ भने',
    description: 'यो लिङ्क क्लिक गर्नुहोस्'
  },
  {
    lang: 'English',
    name: 'If you are interested',
    description: 'Click this link'
  }
];

const currentLanguage = 'Nepali'; // This should come from your language state management

export default function Home() {
  const content = languageOptions.find(option => option.lang === currentLanguage) ?? languageOptions[0];

  return (
    <ImageBackground 
      source={require('../assets/images/main.jpg')}
      className="flex-1 w-full"
      resizeMode="cover"
    >
      <View className="flex-1 bg-black/60 items-center justify-center">
        <View className="items-center justify-center">
          <Text className="text-xl text-white text-center my-2">
            {content.name}
          </Text> 
        </View>
        
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/profile")}
          className="bg-[#63cd15] px-4 py-2 rounded-xl w-56 mt-4 shadow-md"
        >
          <Text className="text-white text-center text-base">
            {content.description}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}