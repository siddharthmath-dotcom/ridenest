import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

// react-native-swiper calls setImmediate after scrolling, but browsers do not
// provide it. Keep the native implementation when one exists.
const runtimeGlobal = globalThis as typeof globalThis & {
    setImmediate?: (callback: () => void) => ReturnType<typeof setTimeout>;
};
runtimeGlobal.setImmediate ??= (callback: () => void) =>
    globalThis.setTimeout(callback, 0);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        "Jakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
        "Jakarta-ExtraBold": require("../../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
        "Jakarta-ExtraLight": require("../../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
        "Jakarta-Light": require("../../assets/fonts/PlusJakartaSans-Light.ttf"),
        "Jakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
        "Jakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "Jakarta-SemiBold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
