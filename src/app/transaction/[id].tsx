import { View, Text, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
export default function Transaction() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Transaction {id}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
