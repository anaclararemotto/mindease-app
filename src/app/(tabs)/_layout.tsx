import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Tabs } from "expo-router";
import { BookOpen, Home, User } from "lucide-react-native";
import { View } from "react-native";

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Início",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: focused ? 3 : 0,
                borderBottomColor: colors.colorPrimary,
              }}
            >
              <Home
                size={22}
                color={focused ? colors.colorPrimary : colors.placeholder}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="content"
        options={{
          title: "Conteúdo",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: focused ? 3 : 0,
                borderBottomColor: colors.colorPrimary,
              }}
            >
              <BookOpen
                size={22}
                color={focused ? colors.colorPrimary : colors.placeholder}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderBottomWidth: focused ? 3 : 0,
                borderBottomColor: colors.colorPrimary,
              }}
            >
              <User
                size={22}
                color={focused ? colors.colorPrimary : colors.placeholder}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
