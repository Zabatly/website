import { useContext } from 'react';
import { Home, Heart, MessageCircle } from '@tamagui/lucide-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { useThemeNameState } from 'app/utils/themeState';
const colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
  },
};
export default function TabLayout() {
  const theme = useThemeNameState();
  //const isDarkTheme = theme === 'dark';
  // const colorScheme = useColorScheme();
  // const { theme } = useContext(ThemeContext);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors[theme ?? 'light'].tint,
        tabBarStyle: {
          backgroundColor: colors[theme ?? 'light'].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          /*
          headerStyle: {
            backgroundColor: colors['dark'].background,
          },
          */
          title: 'Discover',
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ color }) => <MessageCircle color={color} />,
        }}
      />
      {/*
         <Tabs.Screen
        name="signin"
        options={{
          title: 'Wishlist',
          headerShown: false,
          tabBarIcon: ({ color }) => <Heart color={color} />,
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
        */}
    </Tabs>
  );
}
