import { Stack } from "expo-router";


export default function LayoutAuth(){
    return (
        <Stack
            initialRouteName='login'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
            <Stack.Screen name="recover"/>
        </Stack>
    );
}