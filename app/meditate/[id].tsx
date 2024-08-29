import { ImageBackground, Pressable, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLocalSearchParams, useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';

const Meditate = () => {
    const [remainingSeconds, setRemainingSeconds] = useState<number>(10);
    const [isMeditating, setIsMeditating] = useState<boolean>(false);

    // Countdown 
    useEffect(()=>{
        let timerId : NodeJS.Timeout;

        if (remainingSeconds === 0){
            setIsMeditating(false);
            return;
        }

        if(isMeditating){
            timerId = setTimeout(()=> {
                setRemainingSeconds(remainingSeconds-1);
            }, 1000);
        }

        return () => {
            clearTimeout(timerId);
        }
    },[remainingSeconds, isMeditating])

    // Time Formats
    const formattedMinutes = String(Math.floor(remainingSeconds/60)).padStart(2,"0");

    const formattedSeconds = String(remainingSeconds % 60).padStart(2,"0");

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
                    className='absolute z-10 top-16 left-8 tap- duration-500 ease-out'
                    >
                    <AntDesign name="leftcircleo" size={26} color="#F4F3F2" />
                </Pressable>
                <View className='flex-1 justify-evenly'>
                    <View className='mx-auto bg-neutral-100/90 rounded-full w-44 h-44 justify-center items-center'>
                        <Text className='text-4xl text-teal-800 font-kanit tracking-wider'>
                            {formattedMinutes}:{formattedSeconds}
                        </Text>
                    </View>
                    <View className='mb-5'>
                        <CustomButton title="Start Meditation" onPress={()=>setIsMeditating(true)}/>
                    </View>
                </View>
            </AppGradient>
        </ImageBackground>
    </View>
  )
}

export default Meditate;
