import { View, Text, ScrollView,Image, Platform, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';


const ios  = Platform.OS == 'ios'
const topMarigin = ios? 'mt-3' : 'mt-10'
const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
      showsVerticalScrollIndicator={false}
      className={"space-y-6"+topMarigin}
      >
        <View className="flex flex-row-reverse items-center justify-between mx-5 mb-18 mt-5">
            <Text style={{fontSize:wp(7)}} className="font-bold text-slate-800">اكتشف الجزائر</Text>
          <TouchableOpacity>
            <Image source={require("../../assets/images/avatar.png")} style={{height:wp(12), width:wp(12)}} />
          </TouchableOpacity>
        </View>
        <View className="mx-5 mb-4 mt-3">
        <View className="mb-3">
              <Text 
                style={{fontSize: hp(1.7),marginBottom:10}} 
                className="text-neutral-600">Hello, Daha👋</Text>
            </View>
          <View className="flex-row item-center bg-neutral-100 rounded-full pt-3 pb-2 pl-3 pr-3 space-x-2">
            <TextInput 
            placeholder='ابحث'
            className="flex-1 mb-1 text-base pl-1 tracking-wider"
            textAlign='right'  
            />
              <MagnifyingGlassIcon  size={20} strokeWidth={3} color="gray"/>
          </View>
        </View>
      <View className="mb-4">
          <Categories />
      </View>

      <View className="mb-4">
        <SortCategories/>
      </View>

      <View>
        <Destinations/>
      </View>
    
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen