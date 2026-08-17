import { MaterialIcons } from "@expo/vector-icons";
import { ColorValue, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/colors";

type Props = PressableProps & {
  isSelected: boolean;
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  selectedColor: ColorValue;
};

export function Option({
  isSelected,
  title,
  icon,
  selectedColor,
  ...rest
}: Props) {
  return (
    // Pressable utilizado mais no caso de não precisar de opacity além do mais aqui será como uma opçãp
    <Pressable
      style={[styles.option, isSelected && { backgroundColor: selectedColor }]}
      {...rest}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color={isSelected ? colors.white : colors.gray[500]}
      />
      <Text style={[styles.title, isSelected && { color: colors.white }]}>
        {title}
      </Text>
    </Pressable>
  );
}
