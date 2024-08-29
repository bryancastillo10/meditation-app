import AppGradient from '@/components/AppGradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { FlatList, ImageBackground, Text, View, Pressable } from 'react-native';

import { MEDITATION_DATA } from '@/constants/MeditationData';
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from 'expo-linear-gradient';


const NatureMeditate = () => {
  const router = useRouter();
  return (
    <View className='flex-1'>
      <AppGradient colors={["#161b2e","#0a4d4a","#766e67"]}>
        <View className='my-8'>
          <Text className="text-gray-200 my-2 font-bold text-4xl text-left">
            Welcome Guest
          </Text>
          <Text className='text-[#F4F3F2] text-lg font-quick'>
            Start your relaxation today!
          </Text>
        </View>
        <View>
          <FlatList 
            data={MEDITATION_DATA}
            className='mb-20'
            keyExtractor={(item)=> item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>
            <Pressable 
              className="h-48 my-3 rounded-md overflow-hidden"
              onPress={()=>router.push(`/meditate/${item.id}` as never)}            
              >
                <ImageBackground 
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className='flex-1 rounded-xl justify-center'>
                    <LinearGradient colors={["transparent","rgba(0,0,0,0.8)"]} className='flex-1 justify-center items-center'>
                      <Text className='text-gray-100 text-3xl font-bold text-center font-kanit'>
                        {item.title}
                      </Text>
                    </LinearGradient>
                </ImageBackground>
            </Pressable>
          }
          />
        </View>
      </AppGradient>

      <StatusBar style="light"/>
    </View>
  )
}

export default NatureMeditate
