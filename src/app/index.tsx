import { StyleSheet, Text, View } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
export default function Index() {
  const sumaryData = {
    input: { label: "Entradas", value: "R$ 6.148,00" },
    output: { label: "Saídas", value: "R$ 1.500,00" },
    total: "R$ 2.680,00",
  };
  return (
    <View style={styles.container}>
      <HomeHeader data={sumaryData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
