import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type LanguageContent ={
  lang: 'Nepali' | 'English';
  name: string;
  animaldescription: string;
  plantdescription: string;
}
const langaugeOptions : LanguageContent[] =[
{
  lang:"Nepali",
  name:"पाठ्यक्रमहरू",
  animaldescription:"कसरी पशुपालन गर्ने ?",
  plantdescription:"बिरुवा कसरी बढ्ने ?",
 },
{
  lang:"English",
  name:"Courses",
  animaldescription:"How to rear animals?",
  plantdescription:"How to grow crops?",
 },
];

const currentLanguage = 'Nepali';
export default function Course() {
 const content = langaugeOptions.find(option => option.lang === currentLanguage) ?? langaugeOptions[0];
  return (
  
      <SafeAreaView  className='flex-1 bg-gray-100 m-2 '>
        <View className='bg-white  p-4 justify-center rounded-lg shadow-md items-center text-center' >
          <Text className='text-3xl font-bold mb-2'>{content.name}</Text>
        </View>  
        <View className='justify-start p-4'>
          <Text className='text-2xl'>{content.animaldescription}</Text>
        </View>
        <View className='justify-start p-4'>
          <Text className='text-2xl'>{content.plantdescription}</Text>
        </View>
      </SafeAreaView>
 
  );
}

