import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout(){
    return (
        <Tabs
            screenOptions={{
            tapBarActiveTintColor: "#4B0082",
            tabBarInactiveTintColor: "#FFFFFF",
            tabBarStyle: {
                backgroundColor: "#FFC0CB",
                borderTopColor: "#4B0082",
                borderTopWidth: 1,
                height: 60,
            },
            tapBarLabelStyle: {
                fontSize: 12,
                marginBottom: 5,
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
            name="profile"
            options={{
                title:"Perfil",
                tapBarIcon: ({ color, size }) => (
                    <MaterialIcons name="people" size={24} color="black" />
                ),
            }}
        />
        <Tabs.Screen
            name="news"
            options={{
                title:"Notícias",
                tapBarIcon: ({ color, size }) => (
                    <Ionicons name="news" color={white} size={16} />
                ),
            }}
        />

        <Tabs.Screen
                    name="contact"
                    options={{
                        title:"Contato",

                    }}
        />

    </Tabs>
    );
}