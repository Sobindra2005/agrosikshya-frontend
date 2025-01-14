import React from 'react';
import {  View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type LanguageContent ={
  lang: 'Nepali' | 'English'
  name: string;
  description: string;
}

 const languageOptions : LanguageContent[] = [
  {
    lang:"Nepali",
    name:"व्यापार डायरी",
    description:"आम्दानी र खर्च"
  },
  {
    lang:"English",
    name:"Business Diary",
    description:"Incomes and Expenses"
  }
 ]
 const currentLanguage = 'English';

export default function Diary() {
 const content = languageOptions.find(Option => Option.lang === currentLanguage) ?? languageOptions[0];
  return (
    <View className='flex-1 bg-gray-100 m-2 '>
          <View className='bg-white p-4 justify-center rounded-lg shadow-md items-center text-center' >
          <Text className='text-3xl' >{content.name}</Text>
      </View>
      <View>
          <Text className='text-2xl' >{content.description}</Text>        
      </View>
    </View>
  );
}
