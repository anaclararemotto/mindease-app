import { useTheme } from "@/src/shared/theme/ThemeContext";
import { View } from "react-native";
import { contentStyles } from "./content.styles";


export const ContentView = () => {
  const { colors } = useTheme();
  const styles = contentStyles(colors);

  return (
    <View style={styles.container}>
      <View>

      </View>
    </View>
  );
};
