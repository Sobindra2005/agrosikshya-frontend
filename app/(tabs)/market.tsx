import React from 'react';
import { View, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type LanguageContent ={
  lang: 'Nepali' | 'English',
  name: string,
  description: string,
};
 const languageOptions : LanguageContent[]=[
  {
    lang:"Nepali",
    name:"बजार प्रवृत्ति",
    description:"स्थान आधारित बजार प्रवृत्ति"
  },
  {
    lang:"English",
    name:"Market Trends",
    description:"Location based market trend"
  }
 ]
 const currentLangauge="Nepali";

export default function Market() {
 const content = languageOptions.find(Option => Option.lang === currentLangauge) ?? languageOptions[0]
  return (
    <View className='flex-1 bg-gray-100 m-2 '>
      <View className='bg-white p-4 justify-center rounded-lg shadow-md items-center text-center' >
        <Text className='text-3xl'>{content.name}</Text>
      </View>
      <View className='m-2'>
        <Text className='text-2xl'>{content.description}</Text>
      </View>
    </View>
  );
}
