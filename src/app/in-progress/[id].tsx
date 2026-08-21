import { Alert, View } from "react-native";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { PageHeader } from "@/components/PageHeader";
import { List } from "@/components/List";
import { Transaction, TransactionProps } from "@/components/Transaction";
import { Progress } from "@/components/Progress";
import { Button } from "@/components/Button";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { router } from "expo-router";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { useCallback, useState } from "react";
import { numberToCurrency } from "@/utils/NumberToCurrecy";
import { Loading } from "@/components/Loading";

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "R$ 300,00",
    date: "12/04/2026",
    description: "CDB de 110% no banco XPTO",
    type: TransactionTypes.Input,
  },
  {
    id: "2",
    value: "R$ 20,00",
    date: "14/04/2026",
    type: TransactionTypes.Output,
  },
];
export default function InProgress() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const targetDatabase = useTargetDatabase();
  const [details, setDetails] = useState({
    name: "",
    current: "R$ 0,00",
    target: "R$ 0,00",
    percentage: 0,
  });
  const [isFetching, setIsFetching] = useState(true);

  async function fetchDetails() {
    try {
      const response = await targetDatabase.getById(Number(id));
      if (!response) {
        throw new Error("Meta não encontrada.");
      }
      setDetails({
        name: response.name,
        current: numberToCurrency(response.current),
        target: numberToCurrency(response.amount),
        percentage: response.percentage,
      });
      setIsFetching(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar as transações.");
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchDetails();
    }, []),
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title={details.name}
        rightButton={{ icon: "edit", onPress: () => {} }}
      />
      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma Transação. Toque em nova transação"
      />

      <Button
        title="Nova Transação"
        onPress={() => router.navigate(`/transaction/${id}`)}
      />
    </View>
  );
}
