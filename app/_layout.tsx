import { SplashScreen, Stack} from 'expo-router';
import {useFonts} from 'expo-font';
import { useEffect } from 'react';
import TimerProvider from '@/context/TimerContext';

// Prevent Splashscreen from auto hiding until loading all the font assets
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Quicksand-Regular":require("../assets/fonts/Quicksand-Regular.ttf"),
    "Kanit-SemiBold":require("../assets/fonts/Kanit-SemiBold.ttf")
  });

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();

  },[fontsLoaded,error])

  if(!fontsLoaded) return null;
  if(!fontsLoaded && !error) return null;

  return (
    <TimerProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="index"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="meditate/[id]"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="(modal)/adjustduration"
          options={{headerShown: false, presentation:"modal"}}
        />
      </Stack>
    </TimerProvider>
  )
}

export default RootLayout
