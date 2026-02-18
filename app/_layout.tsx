import { View } from "react-native";
import HomeScreen from "./pages/HomeScreen";

export default function RootLayout() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HomeScreen />
    </View>
  );
}
