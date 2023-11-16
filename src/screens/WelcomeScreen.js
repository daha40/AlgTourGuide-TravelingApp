import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-1 fixed justify-end ">
      <Image source={require('../../assets/images/_welcome.png')} className="h-full w-full absolute"/>
      <View className="p-5 pb-15 space-y-8 ">
      <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={{width: wp(100), height: hp(60)}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
          />
        <View className="space-y-3">
          <Text className="font-bold text-white text-5xl" style={{fontSize:wp(10)}}>استكشف الجزائر</Text>
          <Text className="text-neutral-50 font-medium mt-3 mb-7" style={{fontSize:wp(4)}}>استمتع بتجربة فريدة من نوعها في استكشاف طبيعة الجزائر!</Text>
          <TouchableOpacity 
          onPress={()=> navigation.navigate('Home')} 
          className="bg-emerald-500 mx-auto p-3 px-12 rounded-full mb-3"
          >
            <Text className="text-white font-bold" style={{fontSize:wp(5.5)}}>
            استكشف الآن
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreen