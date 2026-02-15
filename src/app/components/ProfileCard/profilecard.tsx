import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ProfileAvatar } from "../../components/ProfileAvatar/profileavatar";
import { profileCardStyles } from "./profilecard.styles";
import { profileCardProps } from "./profilecard.types";

export const ProfileCard = ({ nome, email }: profileCardProps) => {
  const { colors } = useTheme();
  const styles = profileCardStyles(colors);

  return (
    <View style={styles.container}>
      <ProfileAvatar />
      <View>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.mail}>{email}</Text>
        <Link style={styles.link} href={"/"}>
          Editar perfil
        </Link>
      </View>
    </View>
  );
};
