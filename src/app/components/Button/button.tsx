import { useTheme } from "@/src/shared/theme/ThemeContext";
import { router } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button = ({
  title,
  onPress,
  href,
  disabled = false,
  icon: Icon,
  iconPosition = "left",
  iconClassName = "",
  isLoading = false,
  showIcon = false,
}: ButtonProps) => {
  const handlePress = () => {
    if (disabled || isLoading) return;
    if (onPress) onPress();
    else if (href) router.push(href);
  };

  const { colors } = useTheme();
  const styles = buttonStyles(colors);

  const shouldRenderIcon = isLoading || (showIcon && Icon);

  const containerStyle = [
    styles.container,
    (disabled || isLoading) && styles.disabled,
  ];

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={containerStyle}
      disabled={disabled || isLoading}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || isLoading, busy: isLoading }}
      accessibilityLabel={title}
    >
      <View style={styles.content}>
        {shouldRenderIcon &&
          iconPosition === "left" &&
          (isLoading ? (
            <ActivityIndicator
              size="small"
              color={colors.white}
              style={styles.iconLeft}
            />
          ) : (
            Icon && (
              <Icon
                color={colors.white}
                className={iconClassName}
                style={styles.iconLeft}
              />
            )
          ))}

        <Text style={styles.text}>{title}</Text>

        {shouldRenderIcon &&
          iconPosition === "right" &&
          (isLoading ? (
            <ActivityIndicator
              size="small"
              color={colors.white}
              style={styles.iconRight}
            />
          ) : (
            Icon && (
              <Icon
                color={colors.white}
                className={iconClassName}
                style={styles.iconRight}
              />
            )
          ))}
      </View>
    </TouchableOpacity>
  );
};
