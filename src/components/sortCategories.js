import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sortCategoryData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { theme } from '../theme';

const SortCategories = () => {
  const [ActiveSort , setActiveSort] = useState('Popular')
  return (
    <View className="flex-row rounded-full bg-neutral-100 justify-around items-center mx-4 p-2 px-4 space-x-2">
      {
        sortCategoryData.map((sct,i)=>{
          let isActive = sct === ActiveSort
          let activeButton = isActive? "bg-white shadow-sm " : ""
          return(
            <TouchableOpacity 
            onPress={()=>setActiveSort(sct)} 
            key={i} className={`p-3 px-4 flex rounded-full ${activeButton}`}
            >
              <Text 
              className="font-semibold" 
              style={{fontSize:wp(4), color:isActive? '#10B981': "rgba(0,0,0,6)"}}>
                {sct}
              </Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default SortCategories