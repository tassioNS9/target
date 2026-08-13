import { View, TextInput, Text, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/colors";

interface InputProps extends TextInputProps {
  label?: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  );
}
