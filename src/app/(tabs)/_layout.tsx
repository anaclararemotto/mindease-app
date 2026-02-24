import { Stack, Tabs } from "expo-router";
import { BookOpen, Home, User } from "lucide-react-native";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { View } from "react-native";

export default function TabsLayout() {
  const { colors } = useTheme();
  return (
      <Tabs>
        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarShowLabel: false,
            headerShown: false,
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
            tabBarShowLabel: false,
            headerShown: false,
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
            tabBarShowLabel: false,
            headerShown: false,
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
