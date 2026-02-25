import { useTheme } from "@/src/shared/theme/ThemeContext";
import { ChevronRight } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { optionCardStyles } from "./optioncard.styles";
import { OptionCardProps } from "./optioncard.types";

export const OptionCard = ({ label, icon: Icon, onPress }: OptionCardProps) => {
  const { colors } = useTheme();
  const styles = optionCardStyles(colors);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        {Icon && <Icon size={20} color={colors.brandAlternative} />}
        <Text style={styles.text}>{label}</Text>
      </View>
      <ChevronRight color={colors.brandAlternative} />
    </TouchableOpacity>
  );
};
