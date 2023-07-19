import React from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import logo from '../assets/images/logo.png';
import blood from '../assets/images/blood.png';
import lung from '../assets/images/lung.png';
import skin from '../assets/images/skin.png';
import brain from '../assets/images/brain.png';
import colon from '../assets/images/colon.png';
import breast from '../assets/images/breast.png';
import { useNavigation } from "@react-navigation/native";
const HomeHeader = ({searchHandler}) => {
  const navigation = useNavigation();
  const Blood = () => {
    navigation.navigate("Blood");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={logo}
            resizeMode="contain"
            style={{ width: 44, height: 44 }}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={styles.userText}>cancer diagnosis system</Text>
          </View>
          
        </View>
      </View>

      <View style={{ marginTop: 20, paddingHorizontal: 10, fontSize: 28 }}>
        <Text style={{ fontSize: 20, color: '#757575', fontWeight: '600' }}>Choose your cancer type</Text>
      </View>

      <TouchableOpacity onPress={Blood}>
      <View style={{ marginTop: SIZES.xLarge + 10, paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <Image  source={blood}
          style={{ width: 64, height: 64 }}
           />
          <Text 
          placeholderTextColor={COLORS.white}
          style={{ flex: 1, color: '#25578A', fontWeight: 'bold', fontSize: 18, paddingLeft: 20 }}
          onChangeText={searchHandler}>
          Blood
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <Image  source={lung}
          style={{ width: 64, height: 64 }}
           />
          <Text 
          placeholderTextColor={COLORS.white}
          style={{ flex: 1, color: '#25578A', fontWeight: 'bold', fontSize: 18, paddingLeft: 20 }}
          onChangeText={searchHandler}>
          Lung
          </Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <Image  source={breast}
          style={{ width: 64, height: 64 }}
           />
          <Text 
          placeholderTextColor={COLORS.white}
          style={{ flex: 1, color: '#25578A', fontWeight: 'bold', fontSize: 18, paddingLeft: 20 }}
          onChangeText={searchHandler}>
          Breast
          </Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <Image  source={colon}
          style={{ width: 64, height: 64 }}
           />
          <Text 
          placeholderTextColor={COLORS.white}
          style={{ flex: 1, color: '#25578A', fontWeight: 'bold', fontSize: 18, paddingLeft: 20 }}
          onChangeText={searchHandler}>
          Colon
          </Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <Image  source={skin}
          style={{ width: 64, height: 64 }}
           />
          <Text 
          placeholderTextColor={COLORS.white}
          style={{ flex: 1, color: '#25578A', fontWeight: 'bold', fontSize: 18, paddingLeft: 20 }}
          onChangeText={searchHandler}>
          Skin
          </Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <Image  source={brain}
          style={{ width: 64, height: 64 }}
           />
          <Text 
          placeholderTextColor={COLORS.white}
          style={{ flex: 1, color: '#25578A', fontWeight: 'bold', fontSize: 18, paddingLeft: 20 }}
          onChangeText={searchHandler}>
          Brain
          </Text>
        </View>
      </View>
      </TouchableOpacity>
     

    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 20,
    
  },
  userText: {
    color: '#25578A',
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge + 2,
    
  },
  searchContainer: {
    width: "100%",
    borderRadius: SIZES.small,
    backgroundColor: '#F9F9F9',
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  
});
