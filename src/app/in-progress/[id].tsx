import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PageHeader } from "@/components/PageHeader";

import { Progress } from "@/components/Progress";

const details = {
  current: "R$ 1.000,00",
  target: "R$ 1.790,00",
  percentage: 60,
};
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
    </View>
  );
}
