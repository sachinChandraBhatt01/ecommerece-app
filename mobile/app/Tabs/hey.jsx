import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hey = () => {
  return (
    <View style={style.container}>
      <Text style={style.type}>Hey</Text>
    </View>
  )
}

export default Hey

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#302d2dff",
    alignItems: "center",
    justifyContent: "center",
  },
  type: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    fontFamily: "Roboto",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: "rgba(195, 188, 188, 0.75)",
  }
});

