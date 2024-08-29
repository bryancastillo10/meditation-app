import { ImageBackground, Pressable, Text, View } from 'react-native';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLocalSearchParams, useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';

const Meditate = () => {
    const {id} = useLocalSearchParams();
    const router = useRouter();
    return (
    <View className='flex-1 justify-center '>
        <ImageBackground 
            source={MEDITATION_IMAGES[Number(id)] - 1}
            resizeMode="cover"
            className='flex-1'
            >
            <AppGradient colors={["transparent","rgba(0,0,0,0.2)"]}>
                <Pressable
                    onPress={()=>router.back()}
                    className='absolute z-10 top-16 left-8'
                    >
                    <AntDesign name="leftcircleo" size={26} color="#F4F3F2" />
                </Pressable>
                <View className='flex-1 justify-evenly'>
                    <View className='mx-auto bg-neutral-100/90 rounded-full w-44 h-44 justify-center items-center'>
                        <Text className='text-4xl text-teal-800'>0:00</Text>
                    </View>
                    <View className='mb-5'>
                        <CustomButton title="Start Meditation" onPress={()=>{}}/>
                    </View>
                </View>
            </AppGradient>
        </ImageBackground>
    </View>
  )
}

export default Meditate;
