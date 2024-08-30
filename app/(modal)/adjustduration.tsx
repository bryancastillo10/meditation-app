import {  Pressable, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AppGradient from '@/components/AppGradient';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';

const AdjustDuration = () => {
  const router = useRouter();
  
  const handlePress= (duration:number)  => {
    router.back();
  }
  
  return (
    <View className='relative flex-1'>
      <AppGradient colors={["#161B2E","#0A4D4A","#766E67"]}>
          <Text>Test</Text>
          <Pressable
                    onPress={()=>router.back()}
                    className='absolute z-10 top-20 left-6 tap- duration-500 ease-out'
                    >
                    <AntDesign name="leftcircleo" size={32} color="#F4F3F2" />
            </Pressable>
            <View className='flex-1 justify-center'>
              <Text className='text-center text-white font-bold text-2xl mb-8'>
                Adjust  your meditation duration
              </Text>
              <View>
                <CustomButton
                  title='10 seconds' 
                  onPress={()=>handlePress(10)}
                  containerStyles='my-6'
                />
                <CustomButton
                  title='30 seconds' 
                  onPress={()=>handlePress(30)}
                  containerStyles='mb-6'
                />
                                <CustomButton
                  title='5 minutes' 
                  onPress={()=>handlePress(5*60)}
                  containerStyles='mb-6'
                />
                <CustomButton
                  title='10 minutes' 
                  onPress={()=>handlePress(10*60)}
                  containerStyles='mb-6'
                />

                <CustomButton
                  title='30 minutes' 
                  onPress={()=>handlePress(30*60)}
                  containerStyles='mb-6'
                />
              </View>
            </View>
      </AppGradient>
    </View>
  )
}

export default AdjustDuration;
