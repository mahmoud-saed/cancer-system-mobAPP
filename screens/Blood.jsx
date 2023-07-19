import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import upload from '../assets/images/upload.png';
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const Blood = () => {

    const navigation = useNavigation();
    const MoreDetails = () => {
      navigation.navigate("MoreDetails");
    };


  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.userText}>Blood</Text>
      </View>

      <View style={{ marginTop: 20}}>
        <Image style={styles.img}
        source={upload}
        resizeMode="contain"  
        />
      </View>

       <TouchableOpacity>
        <View style={{ marginTop: 20}}>
            <View style={styles.searchContainer}>
                <Text style={{ color: COLORS.white, fontWeight: 600, fontSize: 18 }}>Upload</Text>
            </View>
        </View>
        </TouchableOpacity> 

        <TouchableOpacity>
            <View style={styles.searchContainer}>
                <Text style={{ color: COLORS.white, fontWeight: 600, fontSize: 18 }}>Predict</Text>
            </View>
        </TouchableOpacity> 

        <View style={styles.result}>
                <Text style={{ color: "#757575", fontWeight: 600, fontSize: 18 }}>Result</Text>
            </View>

        <TouchableOpacity onPress={MoreDetails}>
            <View style={styles.more}>
                <Text style={{ color: COLORS.white, fontWeight: 600, fontSize: 13 }}>More Details</Text>
            </View>
        </TouchableOpacity> 
      

    </View>
  )
}

export default Blood

const styles = StyleSheet.create({
    container: {
      padding: SIZES.small,
      paddingTop: 55,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        
    },
    userText: {
        color: "#25578A",
        fontWeight: 800,
        fontSize: SIZES.xLarge + 4,
    },
    img:{
        alignSelf: "center",
        width: 338,
        height: 338,
        borderRadius: 10,
        marginTop: 15, 
    },
    searchContainer: {
        width: 338,
        alignSelf: "center",
        borderRadius: SIZES.small,
        backgroundColor: "#25578A",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 23,
        marginVertical: 10, 
        justifyContent: "center",
      },
    result: {
        width: 338,
        alignSelf: "center",
        borderRadius: SIZES.small,
        backgroundColor: '#D9D9D9',
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 22,
        marginVertical: 10, 
        justifyContent: "center",
    },
    more: {
        width: 120,
        alignSelf: "flex-end",
        borderRadius: SIZES.small,
        backgroundColor: "#25578A",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        marginVertical: 50, 
        justifyContent: "center",
        marginRight: 15,
        
    }
});
  