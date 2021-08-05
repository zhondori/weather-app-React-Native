import React from 'react';
import { Image, Text, View, StyleSheet, Linking, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function Welcome() {
  return (
    <View style={welStyles.wel}>
      <Image
        source={{
          uri:
            'https://easeweather.netlify.app/static/media/weather.b387e9b7.png',
        }}
        style={welStyles.welImg}
      />
      <Text
      style={welStyles.welText}
      >Welcome to Weather Application</Text>
      <Text
      style={welStyles.author}
      >
        Author :&nbsp;
        <Text 
        onPress={() => Linking.openURL('https://github.com/Alisher-Usmonov')}
        style={welStyles.link}
        >Alisher Usmonov</Text>
      </Text>
    </View>
  );
}

const welStyles = StyleSheet.create({
  wel : {
    width: (width / 100) * 90,
    height: 200,
    backgroundColor: "#4FCEFE",
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  welImg : {
    width: 90,
    height: 90,
  },
  welText : {
    fontSize: 17,
    color: "#333"
  },
  author: {
    marginTop: 15,
    fontSize : 15
  },
  link : {
    color: "#A03C78"
  }
});
