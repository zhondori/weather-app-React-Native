import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Form({ fetchData , setName }){
  return (
    <View style={style.form}>
      <TextInput 
      placeholder="Enter city name..."
      style={style.input}
      onChangeText={text => setName(text)}
      />
      <TouchableWithoutFeedback
      onPress={() => fetchData()}
      >
        <Text 
        style={style.button}
        >Search</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    width: (width / 100) * 90,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: (width / 100) * 5
  },
  input: {
    width: ((width / 100) * 90) / 4 * 3,
    height: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: '#66DE93',
    borderRightWidth: 0,
    color: "#222222",
    fontSize: 18
  },
  button: {
    width: ((width / 100) * 90) / 4,
    backgroundColor: "#66DE93",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: 'center',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: '#66DE93',
    paddingRight: 15,
    color: "#ffffff",
    fontSize: 14,
  }
})