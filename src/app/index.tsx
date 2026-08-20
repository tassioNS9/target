import { StyleSheet, View } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { router } from "expo-router";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export default function Index() {
  const targetDatabase = useTargetDatabase();
  const [targetData, setTargetData] = useState<any[]>([]);

  async function fetchTargets() {
    try {
      const response = await targetDatabase.listBySavedValue();
      console.log(response);
      setTargetData(response);
    } catch (error) {
      console.error(error);
    }
  }
  const sumaryData = {
    input: { label: "Entradas", value: "R$ 6.148,00" },
    output: { label: "Saídas", value: "R$ 1.500,00" },
    total: "R$ 2.680,00",
  };

  useFocusEffect(
    useCallback(() => {
      fetchTargets();
    }, []),
  );

  return (
    <View style={styles.container}>
      <HomeHeader data={sumaryData} />

      <List
        title="Metas"
        data={targetData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar uma."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
