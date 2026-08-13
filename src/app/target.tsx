import { StyleSheet, Text, View, Button } from "react-native";
import { router } from "expo-router";
import { PageHeader } from "@/components/PageHeader";
export default function Target() {
  return (
    <View style={styles.container}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira"
        rightButton={{ icon: "edit", onPress: () => {} }}
      />
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
