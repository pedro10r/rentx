import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

export function Load() {
  const { colors } = useTheme();

  return (
    <ActivityIndicator
      color={colors.main}
      size='small'
      style={{ flex: 1 }}
    />
  );
}