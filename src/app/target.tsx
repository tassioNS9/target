import { StyleSheet, Text, View, Button } from "react-native";
import { router } from "expo-router";
export default function Target() {
  return (
    <View style={styles.container}>
      <Text>Expo Router Target!</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
