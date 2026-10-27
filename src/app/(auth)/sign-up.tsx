
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

const SignUp = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1">
                <View className="flex-1 bg-white">
                    <Image
                        source={images.signUpCar}
                        className="w-full h-[250px]"
                        resizeMode="contain"
                    />

                    <Text>Sign Up</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
