import { useTheme } from "@/src/shared/theme/ThemeContext";
import { ChevronRight } from "lucide-react-native";
import { Text, View } from "react-native";
import { optionCardStyles } from "./optioncard.styles";
import { OptionCardProps } from "./optioncard.types";
import { Link } from "expo-router";


export const OptionCard = ({ label, icon: Icon }: OptionCardProps) => {
    const {colors} = useTheme();
    const styles = optionCardStyles(colors);

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                {Icon && <Icon size={20} color={colors.brandAlternative} />}
                <Text style={styles.text}> {label} </Text>
            </View>
            <Link href={'/'}><ChevronRight color={colors.brandAlternative}/></Link>
        </View>
    )
}