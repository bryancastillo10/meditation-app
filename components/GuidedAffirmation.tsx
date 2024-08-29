import { GalleryPreviewData } from '@/constants/types/AffirmationCategory';
import { Image, FlatList, Pressable, Text, View } from 'react-native'
import { Link } from 'expo-router';

interface GuidedAffirmationProps{
    title:string;
    previews: GalleryPreviewData[];
}

const GuidedAffirmation = ({title, previews}:GuidedAffirmationProps) => {
  return (
    <View className='my-6'>
        <View className='mb-2'>
            <Text className='font-bold text-lg'>
                {title}
            </Text>
        </View>       
        <View className='space-y-2'>
            <FlatList
                data={previews}
                keyExtractor={(item)=>item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=> (
                    <Link href={`/affirmations/${item.id}`} asChild>
                        <Pressable>
                            <View className='w-32 h-36 rounded-xl mr-2'>
                                <Image 
                                    source={item.image}
                                    resizeMode="cover"
                                    className="size-full"
                                />
                            </View>
                        </Pressable>
                    </Link>
                )}
                horizontal
            />
        </View>
    </View>
  )
}

export default GuidedAffirmation

