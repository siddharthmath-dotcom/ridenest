import * as Device from 'expo-device';
import {  Text, StatusBar, Platform } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-cyan-400">Ride hi Nest!</Text>
      </SafeAreaView>
  );
}
