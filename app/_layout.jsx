import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                // tapBarActiveTintColor: "#9a00ff",
                tabBarInactiveTintColor: "#ffffff",     
                tabBarActiveTintColor: "#ffff00",
                tabBarStyle: {
                    backgroundColor: "#4B0082",
                    height: '10%',
                },
                tapBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 15,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            
            <Tabs.Screen
                name="news"
                options={{
                    title: "Notícia",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: "Contato",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call-outline" color={color} size={size} />
                    ),
                }}
            />
          
        </Tabs>
    );
}