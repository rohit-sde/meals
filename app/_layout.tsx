import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4a148c",
          },
          headerTintColor: "white",
          contentStyle: {
            backgroundColor: "#774aad",
          },
        }}
      >
        <stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            headerStyle: { backgroundColor: "#4a148c" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#774aad" },
          }}
        />
        <stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      </stack.Navigator>
    </>
  );
}
