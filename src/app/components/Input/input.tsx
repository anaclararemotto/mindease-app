import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { inputStyles } from "./input.styles";
import { InputProps } from "./input.types";

export const Input = ({
  type = "text",
  placeholder = "",
  onChangeText,
  value,
  style,
  onError,
  passwordToMatch,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEmail = type === "email";
  const isPasswordType = type === "password" || type === "confirmPassword";

  const { colors } = useTheme();
  const styles = inputStyles(colors);

  const validate = (text: string) => {
    let err: string | null = null;

    if (isEmail) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(text)) err = "Email inválido";
    }

    if (isPasswordType) {
      if (text.length < 6) err = "A senha deve ter pelo menos 6 caracteres";
    }

    if (type === "confirmPassword") {
      if (passwordToMatch && text !== passwordToMatch) {
        err = "As senhas precisam ser iguais";
      }
    }
    setError(err);
    onError?.(err);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>

        <TextInput
            placeholder={placeholder ?? ""}
            placeholderTextColor={colors.placeholder}
            onChangeText={(text) => {
              onChangeText?.(text);
              validate(text);
            }}
            value={value}
            secureTextEntry={isPasswordType && !showPassword}
            keyboardType={
              isEmail ? 'email-address' : 'default'
            }
            autoCapitalize={isEmail ? 'none' : 'sentences'}
            style={[styles.input, style, { color: colors.placeholder }]}
          />

        {isPasswordType && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <EyeOff size={20} color={colors.placeholder} />
            ) : (
              <Eye size={20} color={colors.placeholder} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text style={{ color: colors.red, marginTop: 4 }}>{error}</Text>
      )}
    </View>
  );
};
