import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { theme } from '../theme';
import { categoriesData } from '../constants';


export default function Categories() {
  return (
    <View className="space-y-5">
        <View className="mx-5 flex-row-reverse justify-between items-center">
            <Text style={{fontSize:wp(5)}} className="font-semibold text-zinc-700">الفئات</Text>
            <TouchableOpacity>
              <Text style={{fontSize:wp(4), color:'#10B981'}}>الكل</Text>
            </TouchableOpacity>
        </View>
        <ScrollView 
        horizontal
        contentContainerStyle={{paddingHorizontal:15}}
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        >
          {
            categoriesData.map((cate,i)=>{
              return(
                <TouchableOpacity key={i} className="flex items-center space-y-2">
                    <Image source={cate.image} className="rounded-3xl" style={{height:wp(20), width:wp(20)}}/>
                    <Text className="font-medium text-neutral-700 " style={{fontSize:wp(4)}}>
                      {cate.title}
                    </Text>
                </TouchableOpacity>
              )

            })
          }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})