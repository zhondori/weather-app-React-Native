import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ImageBackground,
} from 'react-native';
import Form from './components/form/form.jsx';
import Card from './components/Card/Card';
import Welcome from "./components/WelcomePage/welcome";
import NotFound from "./components/notFound/NotFound";

export default function App() {
  const [weather, setWeather] = React.useState({});
  const [cityName, setCityName] = React.useState(null);
  const [err, setErr] = React.useState(false);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dcebe1ffe3cc4e8bc9ad41d5d9b7d941&units=metric`;
  const FetchWeather = () => {
    fetch(URL)
      .then((response) => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch((err) => setErr(true));
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <ImageBackground
        source={{
          uri: 'https://cutt.ly/BmHKzRC',
        }}
        style={styles.imgBg}>
        <View style={styles.main}>
          <Form setName={setCityName} fetchData={FetchWeather} />
          <View style={styles.content}>
            {cityName == null ? <Welcome /> : weather.main && err === false ? <Card weather={weather} /> : <NotFound />}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#ededed',
  },
  main: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  content: {
    marginTop: 30,
  },
  imgBg: {
    flex: 1,
  },
});