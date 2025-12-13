import { StyleSheet, Text, View } from "react-native";

export default function Index() {


  return (
    <View
      style={style.container}
    >
      <Text style={style.type}>Hello This Is me</Text>
    </View>
  );
}


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

