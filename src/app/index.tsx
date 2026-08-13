import { StyleSheet, Text, View } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";
export default function Index() {
  const sumaryData = {
    input: { label: "Entradas", value: "R$ 6.148,00" },
    output: { label: "Saídas", value: "R$ 1.500,00" },
    total: "R$ 2.680,00",
  };

  const targetData = [
    {
      id: "1",
      name: "Comprar uma cadeira ergonômica",
      percentage: "75%",
      current: "R$ 900,00",
      target: "R$ 1200,00",
    },
    {
      id: "2",
      name: "Apple Watch Series 9",
      percentage: "55%",
      current: "R$ 580,00",
      target: "R$ 1790,00",
    },
    {
      id: "3",
      name: "Fazer uma viagem para o Rio",
      percentage: "35%",
      current: "R$ 1380,00",
      target: "R$ 2790,00",
    },
  ];
  return (
    <View style={styles.container}>
      <HomeHeader data={sumaryData} />

      <List
        title="Metas"
        data={targetData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} />}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar uma."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
