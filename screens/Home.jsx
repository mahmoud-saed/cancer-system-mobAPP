import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Animated,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import HomeHeader from "../components/HomeHeader";
import { StatusBar } from "react-native";
const Home = () => {
  const moveSearchAnimation = useRef(new Animated.Value(0)).current;



  const NotFoundNFT = () => {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Opps... ! </Text>
        <Text style={styles.notFoundText}> Not found the NFT</Text>
      </View>
    );
  };

  const searchAnimationHandler = () => {
    Animated.spring(moveSearchAnimation, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    searchAnimationHandler();
  }, [searchAnimationHandler]);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              top: -100,
              transform: [
                {
                  translateY: moveSearchAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
            }}
          >
            <HomeHeader />
          </Animated.View>
          {/* {!nftsData.length ? (
            <NotFoundNFT />
          ) : (
            <FlashList
              data={nftsData}
              renderItem={({ item }) => <NFTCard NFTData={item} />}
              keyExtractor={(item) => item.id}
              estimatedItemSize={200}
            />
          )} */}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight + 10,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});
