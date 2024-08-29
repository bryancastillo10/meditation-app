import { useEffect, useState} from 'react';
import { useLocalSearchParams,router} from 'expo-router'
import {  ImageBackground, Pressable, ScrollView,Text, View } from 'react-native'
import { GalleryPreviewData } from '@/constants/types/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const AffirmationPractice = () => {
  const {itemId} = useLocalSearchParams();
  const [affirmation,setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(()=>{
        for (const element of AFFIRMATION_GALLERY) {
            const affirmationsData = element.data;

            const affirmationToStart = affirmationsData.find(
                (i)=> i.id === Number(itemId));
            
            if (affirmationToStart){
                setAffirmation(affirmationToStart);

                const affirmationsArray = affirmationToStart.text.split(".");

                if(affirmationsArray[affirmationsArray.length -1] === ""){
                    affirmationsArray.pop();
                }

                setSentences(affirmationsArray);
                return;
            }
        }
  },[])
  return (
    <View className='flex-1'>
         <ImageBackground 
            source={affirmation?.image} 
            resizeMode="cover"
            className='flex-1'
            >
            <AppGradient colors={["rgba(0,0,0,0.3)","rgba(0,0,0,0.4)"]}>
                <Pressable 
                    className="absolute z-10 top-16 left-6" 
                    onPress={()=>router.back()}
                    >
                    <AntDesign name="leftcircle" size={40} color="#f4f3f2"/>
                </Pressable>

                <ScrollView 
                    className="mt-20"
                    showsVerticalScrollIndicator={false}
                    >
                    <View className='h-full justify-center'>
                        <View className='mt-20 rounded-xl shadow-md justify-center px-2 py-4 bg-slate-500/40'>              
                                {sentences.map((sent,idx)=>(
                                    <Text
                                        key={idx}
                                        className='text-center text-white text-2xl font-semibold'
                                        >
                                        {sent}.
                                    </Text>
                                ))}
                        </View>
                    </View>
                </ScrollView>
            </AppGradient>
        </ImageBackground>
    </View>
  )
}

export default AffirmationPractice

