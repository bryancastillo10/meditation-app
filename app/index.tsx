import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import CustomButton from '@/components/CustomButton';
import AppGradient from '@/components/AppGradient';
import {StatusBar} from "expo-status-bar";

import beachImg from '@/assets/meditation-images/beach.webp';
import { useRouter } from 'expo-router';


const App = () => {
  const router = useRouter();
  return (
    <View className='flex-1'>
      <ImageBackground 
      source={beachImg} 
      resizeMode="cover" 
      className='flex-1'
      >
        <AppGradient colors={["rgba(0,0,0,0.4)","rgba(0,0,0,0.8)"]}>       
            <SafeAreaView className="flex-1 justify-between px-1 ">
              <View>
                <Text className='text-center text-white font-semibold text-4xl'>Just Relax</Text>
                <Text className='text-center text-white text-xl'>Simplifying meditation to everyone!</Text>
              </View>
              <View>
                <CustomButton
                  title="Get Started"
                  onPress={()=> router.push("/nature" as never)}
                  />
              </View>
                <StatusBar style="light"/>
            </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default App;