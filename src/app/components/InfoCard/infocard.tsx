import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Text, View } from "react-native";
import { infoCardStyles } from "./infocard.styles";
import { infoCardProps } from "./infocard.types";
import { Clock, Flame, Sparkle } from "lucide-react";

export const InfoCard = ({ type, info, subtitle }: infoCardProps) => {
  const { colors } = useTheme();
  const styles = infoCardStyles(colors);

  const iconMap = {
    xp: Sparkle,
    days: Flame,
    hour: Clock,
  };

  const suffixMap = {
  xp: "XP",
  days: "dias",
  hour: "h",
};

  const Icon = iconMap[type];
  const suffix = suffixMap[type];

  return (
    <View style={styles.container}>
      <Icon color={colors.colorPrimary} />
      <Text style={styles.info}>{info} {suffix}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
