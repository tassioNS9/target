import { StyleSheet, Text, View, Button } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
export default function Target() {
  return (
    <View style={styles.container}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira"
        rightButton={{ icon: "edit", onPress: () => {} }}
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
        />
        <Button title="Salvar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
