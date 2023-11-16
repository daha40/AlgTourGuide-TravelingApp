import { View, Image,TouchableOpacity,Text } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

const Destinations = () => {
  const navigation = useNavigation()
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {
        destinationData.map((item, i)=> {
          return(
          <View className="mb-4" key={i}>
            <DestinationCard navigation={navigation} item={item} />
          </View>
          )
        })
      }
    </View>
  )
}

const DestinationCard = ({item,navigation }) => {
  const [isFavourite, setIsFavourite] = useState(false);
    return (
    <TouchableOpacity 
      onPress={()=> navigation.navigate("Destination", {...item})}
      cLassName="flex justify-end relative p-4 py-4 space-y-2 mb-5" 
      style={{width:wp(44),height:wp(65)}}>
        <Image 
        source={item.image}
        style={{width:wp(44),height:wp(65), borderRadius:35}}
        cLassName="absolute"
        />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={{width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
          />
  
          <TouchableOpacity 
          onPress={()=>setIsFavourite(!isFavourite)}
          className="top-1 absolute right-3 rounded-full p-2 mt-2" 
          style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
          >
            <HeartIcon size={wp(5)} color={isFavourite? "red" : "white"}/>
          </TouchableOpacity>

        <View style={{ position: 'absolute', bottom: 0, left: 10, right: 10, paddingBottom: 5 }}>
            <Text style={{ fontSize: wp(4), color: 'white', fontWeight: 'bold' }} className="mb-1">
              {item.title}
            </Text>
            <Text style={{ fontSize: wp(2.2), color: 'white' }} className="mb-5">
              {item.shortDescription}
            </Text>
          </View>
      </TouchableOpacity>
    )
}






export default Destinations