import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import React from 'react'
import { COLORS, FONTS, SIZES } from "../constants";
import xx from '../assets/images/xx.png';

const MoreDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>More Details</Text>
      </View>

      <View style={{ marginTop: 20}}>
      <View style={styles.result}>
        <Text style={{ color: "#757575", fontWeight: 600, fontSize: 18 }}>Explnation</Text>
      </View>
      <View style={ styles.line } />
      </View>
      <View style={styles.result}>
        <Text style={{ color: "#757575", fontWeight: 600, fontSize: 18 }}>Recomenadtion</Text>
      </View>

    </View>
  )
}

export default MoreDetails



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
      color: "#232323",
      fontWeight: 800,
      fontSize: SIZES.xLarge + 4,
  },
  img:{
        alignSelf: "center",
        width: 370,
        height: 240,
        marginTop: 15, 
    },
  result: {
        width: 338,
        alignSelf: "center",
        borderRadius: SIZES.small,
        backgroundColor: '#D9D9D9',
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 290,
        marginVertical: 10, 
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    line: {
      borderStyle: 'solid',
      borderWidth: 0.25,
      borderColor: 'rgba(110, 110, 110, 0.19)',
      width: 310,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: "center",
    },  
});
  