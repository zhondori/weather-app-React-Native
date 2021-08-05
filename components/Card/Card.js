import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Card({ weather }) {

  const time = new Date();

  return (
    <View style={style.card}>
      <View style={style.top}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
          }}
          style={style.weatherImage}
        />
        <Text style={style.temp}>{weather.main.temp} &deg;C</Text>
      </View>
      <View style={style.bottom}>
        <Text style={style.name}>
          {weather.name + (weather.sys.country ? ', ' : null)} {weather.sys.country}
        </Text>
        <Text
        style={style.desc}
        >{weather.weather[0].description}</Text>
        <Text
        style={style.desc}
        >Time {time.getHours()} : {time.getMinutes()}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    width: 270,
    height: 380,
    borderColor: '#999999',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
    borderRadius: 10,
    fontFamily: 'sans-serif',
  },
  top: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottom: {
    height: '30%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  weatherImage: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: '#0DB4DB',
    borderRadius: 50,
    marginBottom: 20,
  },
  temp: {
    fontSize: 28,
    color: '#333333',
  },
  name: {
    padding: 5,
    fontSize: 22,
  },
  desc: {
    fontSize: 19,
  }
});
