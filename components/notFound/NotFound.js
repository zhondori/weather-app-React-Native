import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function NotFound() {
  return (
    <View
    style={errStyles.err}
    >
      <Image
        source={{
          uri:
            'https://easeweather.netlify.app/static/media/error.3a316b9a.png',
        }}
        style={errStyles.errImg}
      />
      <View
      style={errStyles.textContent}
      >
        <Text
        style={errStyles.heading}
        >Kechirasiz ushbu shahar uchun ob-havo malumotlari topilmadi.</Text>
        <Text
        style={errStyles.paragraph}
        >
         Shahar nomini to'g'ri kiriting, aks holda siz kerakli ma'lumotlarni ololmaysiz!
        </Text>
      </View>
    </View>
  );
}

const errStyles = StyleSheet.create({
  err: {
    width: (width / 100) * 90,
    height: 180,
    backgroundColor: "#eeeeee",
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  errImg: {
    width: '40%',
    height: '100%',
  },
  textContent: {
    width: "60%",
  },
  heading: {
    fontSize: 17,
    marginBottom: 10,
    textAlign: "center",
  },
  paragraph : {
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center"
  }
});
