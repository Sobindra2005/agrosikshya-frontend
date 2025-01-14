import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type languageContent = {
  lang:'Nepali' | 'English'
  name:string,
  description:string
}

const langaugeOptions : languageContent[] =[
  {
  lang:"Nepali",
  name:"स्थान आधारित बाली सिफारिस प्रणाली",
  description:"आफ्नो स्थान छान्नुहोस् र पत्ता लगाउनुहोस् कि तपाईको स्थानको लागि उत्तम के हो।"
  },
  {
  lang:"English",
  name:"Location Based Crops Recommendation System",
  description:"Choose your location and find out what is best for your location."
  },

]
 const currentLanguage ="Nepali";

export default function Market() {
  const content = langaugeOptions.find(Options => Options.lang === currentLanguage) ?? langaugeOptions[0];
  return (
  
      <View className='flex-1 bg-gray-100 m-2 '>
            <View className='bg-white p-4 justify-center rounded-lg shadow-md items-center text-center' >
          <Text className='text-3xl'>{content.name}</Text>
          <Text className='text-2xl' >{content.description}</Text>
        </View>
        
      </View>
  );
}
