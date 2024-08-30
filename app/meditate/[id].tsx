import { ImageBackground, Pressable, Text, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { TimerContext } from '@/context/TimerContext';

import MEDITATION_IMAGES from '@/constants/meditation-images';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';

import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Audio } from 'expo-av';
import { useLocalSearchParams, useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';

const Meditate = () => {
    const { duration: remainingSeconds, setDuration: setRemainingSeconds } = useContext(TimerContext);
    const [isMeditating, setIsMeditating] = useState<boolean>(false);
    const [audio, setAudio] = useState<Audio.Sound>();
    const [playingAudio, setPlayingAudio] = useState<boolean>(false);

    // Countdown 
    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (remainingSeconds === 0) {
            if (playingAudio) audio?.pauseAsync();
            setIsMeditating(false);
            setPlayingAudio(false);
            return;
        }

        if (isMeditating) {
            timerId = setTimeout(() => {
                setRemainingSeconds(remainingSeconds - 1);
            }, 1000);
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [remainingSeconds, isMeditating]);

    // Time Formats
    const formattedMinutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds % 60).padStart(2, "0");

    // Play the Audio File
    useEffect(() => {
        return () => {
            audio?.unloadAsync(); 
        };
    }, [audio]);

    const toggleMeditationSession = async () => {
        if (remainingSeconds === 0) setRemainingSeconds(10); // You can adjust this default value dynamically

        setIsMeditating(!isMeditating);
        await togglePlayAndPause();
    };

    const togglePlayAndPause = async () => {
        const sound = audio ? audio : await initializeAudio();
        const status = await sound?.getStatusAsync();

        if (status?.isLoaded) {
            if (status.isPlaying) {
                await sound.pauseAsync();
                setPlayingAudio(false);
            } else {
                await sound.playAsync();
                setPlayingAudio(true);
            }
        }
    };

    const initializeAudio = async () => {
        const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
        const { sound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audioFileName]
        );
        setAudio(sound);
        return sound;
    };

    // Parameters and Router hook
    const { id } = useLocalSearchParams();
    const router = useRouter();

    // Adjust Duration Button
    const handleAdjustDuration = () => {
        if (isMeditating) toggleMeditationSession();

        router.push("/(modal)/adjustduration" as never);
    };

    return (
        <View className='flex-1 justify-center '>
            <ImageBackground 
                source={MEDITATION_IMAGES[Number(id) - 1]}
                resizeMode="cover"
                className='flex-1'
            >
                <AppGradient colors={["transparent", "rgba(0,0,0,0.2)"]}>
                    <Pressable
                        onPress={() => router.back()}
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
                            <CustomButton 
                                title={isMeditating ? "Stop Meditating" : "Start Meditating"}
                                onPress={toggleMeditationSession}
                            />
                            <CustomButton 
                                title="Adjust Duration" 
                                onPress={handleAdjustDuration}
                                containerStyles="mt-4"
                            />
                        </View>
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default Meditate;
