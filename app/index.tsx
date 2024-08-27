import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import CustomButton from '@/components/CustomButton';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";

import beachImg from "@/assets/meditation-images/beach.webp";


const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground 
      source={beachImg} 
      resizeMode="cover" 
      className='flex-1'
      >
        <LinearGradient 
          className="flex-1" 
          colors={["rgba(0,0,0,0.4)","rgba(0,0,0,0.8)"]}
          >
          <SafeAreaView className="flex-1 justify-between mx-5 my-14 px-1 ">
            <View>
              <Text className='text-center text-white font-semibold text-4xl'>Just Relax</Text>
              <Text className='text-center text-white text-xl'>Simplifying meditation to everyone!</Text>
            </View>
            <View>
              <CustomButton 
                title="Get Started"
                onPress={()=> console.log('button test')}
                />
            </View>
              <StatusBar style="light"/>
          </SafeAreaView>
        </LinearGradient>  
      </ImageBackground>
    </View>
  )
}

export default App;