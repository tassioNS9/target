import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    marginBottom: 32,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: colors.black,
    marginBottom: 7,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[500],
  },
});
