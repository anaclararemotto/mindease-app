import { useTheme } from "@/src/shared/theme/ThemeContext";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { contentCardStyles } from "./contentcard.styles";
import { contentCardProps } from "./contentcard.types";

export const ContentCard = ({ title, subtitle, href, icon: Icon }: contentCardProps) => {
  const { colors } = useTheme();
  const styles = contentCardStyles(colors);

  const router = useRouter();

  return (
      <TouchableOpacity onPress={() => router.push(href)} style={styles.containerCard}>
        <Icon color={colors.brandAlternative}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </TouchableOpacity>
  );
};
