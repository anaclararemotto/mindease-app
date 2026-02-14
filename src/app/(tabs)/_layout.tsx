import { Tabs } from "expo-router";
import { BookOpen, Home, User } from "lucide-react-native";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { View } from "react-native";

export default function TabsLayout() {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: colors.colorSecondary,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? colors.colorSecondary : colors.background,
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
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? colors.colorSecondary : colors.background,
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
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? colors.colorSecondary : colors.background,
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