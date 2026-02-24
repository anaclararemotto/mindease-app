import { useTheme } from "@/src/shared/theme/ThemeContext";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { profileAvatarStyles } from "./profileavatar.styles";

export const ProfileAvatar = () => {
  const { colors } = useTheme();
  const styles = profileAvatarStyles(colors);

  const [image, setImage] = useState<string | null>(null);

  const handlePickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity onPress={handlePickImage}>
      <View style={styles.avatarContainer}>
        {image && <Image source={{ uri: image }} style={styles.avatar} />}
      </View>
    </TouchableOpacity>
  );
};
