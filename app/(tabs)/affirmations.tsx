import { Text, View, ScrollView } from 'react-native'
import AppGradient from '@/components/AppGradient';
import GuidedAffirmation from '@/components/GuidedAffirmation';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';

const Affirmations = () => {
  return (
    <View className='flex-1 jusAtify-center item-center bg-teal-700'>
      <AppGradient colors={["#63CCCA","#0072b2","#0C6291"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className='mt-24 text-center text-3xl font-bold text-slate-800'>
            Change your Faith with Affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((aff,index)=> (
              <GuidedAffirmation 
                key={index} 
                title={aff.title}
                previews={aff.data}
                />
            ) )}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  )
}

export default Affirmations;
