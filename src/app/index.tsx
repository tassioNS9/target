import { StyleSheet, Text, View, Button } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
export default function Index() {
  return (
    <View style={styles.container}>
      <HomeHeader data={{ total: "R$ 2.680,00" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
