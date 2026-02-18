import { StatusBar } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";

const stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <stack.Navigator>
        <stack.Screen name="Categories" component={CategoriesScreen} />
      </stack.Navigator>
    </>
  );
}
