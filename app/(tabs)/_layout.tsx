import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const TabLayout = () => {


  return (
            <Tabs screenOptions={{
                    headerShown:false,
                    tabBarActiveTintColor: Colors.primary
                    }}>
                <Tabs.Screen
                    name="nature"
                    options={{
                        tabBarLabel:"Meditate",
                        tabBarIcon: ({color}) => (
                            <FontAwesome5 name="brain" size={24} color={color}/>
                        )
                    }}
                />
                <Tabs.Screen
                    name="affirmations"
                    options={{
                        tabBarLabel:"Affirmations",
                        tabBarIcon: ({color}) => (
                            <FontAwesome5 name="cloud" size={24} color={color}/>
                        )
                    }}
                />
            </Tabs>
  )
}

export default TabLayout;

