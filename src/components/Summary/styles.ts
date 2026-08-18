import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";

export const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  header: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fontFamily.regular,
  },
  value: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fontFamily.regular,
  },
});
