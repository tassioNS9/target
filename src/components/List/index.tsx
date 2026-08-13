import {
  FlatList,
  FlatListProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { styles } from "./styles";
import { colors } from "@/theme/colors";
import { Separator } from "../Separator";

type ListProps<T> = FlatListProps<T> & {
  title: string;
  emptyMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export function List<T>({
  title,
  emptyMessage = "Nenhum item encontrado",
  containerStyle,
  data,
  renderItem,
  ...rest
}: ListProps<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        {...rest}
        style={styles.listContent}
        ItemSeparatorComponent={() => <Separator color={colors.gray[400]} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.empty}>{emptyMessage}</Text>}
      />
    </View>
  );
}
