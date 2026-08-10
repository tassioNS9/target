import { StyleSheet, Text, View, Button } from "react-native";
import { router } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Nova Meta" onPress={() => router.navigate("/target")} />
      <Button
        title="Nova Transação"
        onPress={() => router.navigate("/transaction/123")}
      />
      <Button
        title="Progresso"
        onPress={() => router.navigate("/in-progress/456")}
      />
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
