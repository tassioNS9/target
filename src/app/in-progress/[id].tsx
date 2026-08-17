import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PageHeader } from "@/components/PageHeader";
import { List } from "@/components/List";
import { Transaction, TransactionProps } from "@/components/Transaction";
import { Progress } from "@/components/Progress";
import { Button } from "@/components/Button";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { router } from "expo-router";

const details = {
  current: "R$ 1.000,00",
  target: "R$ 1.790,00",
  percentage: 60,
};

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

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch Series 9"
        subtitle="Economize para alcançar sua meta financeira"
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
