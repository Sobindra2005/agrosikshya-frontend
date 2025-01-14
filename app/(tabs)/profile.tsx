import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type languageContent = {
  lang:'Nepali' |'English',
  name:string,
  description:string,
}
 const languageOptions : languageContent[]=[
  {
    lang:'Nepali',
    name:'प्रोफाइल',
    description:'मेरो बारेमा'
  },
  {
    lang:'English',
    name:'profile',
    description:'Who am I'
  },
 ]
 const currentLanguage = 'Nepali';

export default function Profile() {
 const content = languageOptions.find(Option => Option.lang === currentLanguage) ?? languageOptions[0];
  return (
   
      <View className='bg-gray-100 m-2 ' >
        <View className='justify-center items-center bg-white' >
          <Text className='text-3xl ' >{content.name}</Text>
          <Text className='text-2xl' >{content.description}</Text>
        </View>
        
      </View>
  );
}
