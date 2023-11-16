import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

const DestinationScreen = (props) => {
    const item = props.route.params
    const [isFavourite, setIsFavourite] = useState(false);
    const navigation = useNavigation()
  return (
    <View className ="bg-white flex-1">
      <Image 
        source={item.image}
        style={{width: wp(100), height: hp(55)}}
      />
      <StatusBar style={'light'} />
      <SafeAreaView className="flex-row justify-between item-center w-full absolute">
        <TouchableOpacity 
        className="p-2 rounded-full ml-4"
        onPress={()=> navigation.goBack()}
        style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> setIsFavourite(!isFavourite)}//true
        className="p-2 rounded-full mr-4"
        style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
        >
          <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite? "red": "white"} />
        </TouchableOpacity>
      </SafeAreaView>


      <View 
      style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} 
      className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14"
      >
        <ScrollView showsHorizontalScrollIndicator={false} className="space-y-5">
            <View className="flex-row-reverse justify-between items-start">
                <Text style={{fontSize: wp(7)}} className="flex-1 font-bold text-slate-700">{item.title}</Text>
                <Text style={{fontSize: wp(7), color:'#10B981'}} className="font-semibold">${item.price}</Text>
            </View>
            <Text  
            style={{fontSize: wp(3.5)}}
            className="text-neutral-700 mb-2 tracking-wide"
            >
              {item.longDescription}
            </Text>
            <View className="flex-row justify-between mx-1">
              <View className="flex-row items-start space-x-2"> 
                  <ClockIcon size={wp(7)} color="skyblue" />
                  <View className="flex space-y-2">
                    <Text 
                    style={{fontSize: wp(4.5)}}
                    className="font-bold text-neutral-700"
                    >
                      {item.duration}
                    </Text>
                    <Text className="text-neutral-700 tracking-wide">المدة</Text>
                  </View>
              </View>
            </View>

            <View className="flex-row space-x-2 items-start">
              <MapPinIcon size={wp(7)} color="#f87171" />
              <View className="flex space-y-2">
                  <Text 
                  style={{fontSize: wp(4.5)}} 
                  className="font-bold text-neutral-700"
                  >
                    {item.distance}
                  </Text>
                  <Text className="text-neutral-700 tracking-wide">المسافة</Text>
              </View>
            </View>

            <View className="flex-row space-x-2 items-start ">
                <SunIcon size={wp(7)} color="orange" />
              <View className="flex-start space-y-2 ">
                <Text
                style={{fontSize: wp(4.5)}} 
                className="font-bold text-neutral-700"
                >
                  {item.weather}
                </Text>
                <View className="flex mr-16">
                  <Text className="text-neutral-700 tracking-wide">الطقس</Text></View>
              </View>
            </View>

        </ScrollView>
        <TouchableOpacity
        style={{backgroundColor: theme.bg(0.8), height: wp(15), width: wp(50)}}
        className="mb-6 mx-auto flex justify-center items-center rounded-full mt-5"
        >
          <Text className="text-white font-bold" style={{fontSize: wp(5.5)}}>احجز الان</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DestinationScreen