import { View, Text, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

export default function InProgress() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Progresso {id}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
