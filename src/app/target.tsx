import { Alert, StyleSheet, Text, View } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { CurrencyInput } from "@/components/CurrencyInput";
import { useState } from "react";
import { Button } from "@/components/Button";
import { router, useLocalSearchParams } from "expo-router";
import { useTargetDatabase } from "@/database/useTargetDatabase";

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const params = useLocalSearchParams<{ id?: string }>();
  const targetDatabase = useTargetDatabase();

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert("Atenção", "Preencha nome e valor corretamente");
    }

    setIsProcessing(true);

    if (params.id) {
      console.log("Atualizando meta existente com ID:", params.id);
      // Lógica para atualizar a meta existente
    } else {
      // Lógica para criar uma nova meta
      create();
    }
  }

  async function create() {
    try {
      await targetDatabase.create({ name, amount });
      Alert.alert("Nova Meta", "Meta criada com sucesso!", [
        {
          text: "Ok",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao criar a meta.");
      setIsProcessing(false);
    }
    setIsProcessing(false);
  }
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
          onChangeText={setName}
          value={name}
        />

        <CurrencyInput
          label="Valor alvo (R$)"
          value={amount}
          onChangeValue={(value) => setAmount(value ?? 0)}
        />
        <Button
          title="Salvar"
          isProcessing={isProcessing}
          onPress={handleSave}
        />
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
