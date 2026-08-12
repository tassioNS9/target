import { StyleSheet, Text, View } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
export default function Index() {
  const sumaryData = {
    input: { label: "Entradas", value: "R$ 6.148,00" },
    output: { label: "Saídas", value: "R$ 1.500,00" },
    total: "R$ 2.680,00",
  };

  const targetData = [
    {
      name: "Comprar uma cadeira ergonômica",
      percentage: "75%",
      current: "900,00",
      target: "1200,00",
    },
  ];
  return (
    <View style={styles.container}>
      <HomeHeader data={sumaryData} />

      <Target data={targetData[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
