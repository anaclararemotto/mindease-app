import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
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

  const isDate = type === "date";

  const formatDate = (text: string) => {
    const numbers = text.replace(/\D/g, "").slice(0, 8);

    let formatted = numbers;

    if (numbers.length > 2) {
      formatted = numbers.slice(0, 2) + "/" + numbers.slice(2);
    }

    if (numbers.length > 4) {
      formatted =
        numbers.slice(0, 2) +
        "/" +
        numbers.slice(2, 4) +
        "/" +
        numbers.slice(4);
    }

    return formatted;
  };

  const validateDate = (text: string) => {
    if (text.length !== 10) return "Data incompleta";

    const [day, month, year] = text.split("/").map(Number);

    const date = new Date(year, month - 1, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return "Data inválida";
    }

    return null;
  };

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
            if (isDate) {
              const formatted = formatDate(text);
              onChangeText?.(formatted);
              return;
            }

            onChangeText?.(text);
            validate(text);
          }}
          value={value}
          secureTextEntry={isPasswordType && !showPassword}
          keyboardType={
            isEmail ? "email-address" : isDate ? "numeric" : "default"
          }
          maxLength={isDate ? 10 : undefined}
          autoCapitalize={isEmail ? "none" : "sentences"}
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
