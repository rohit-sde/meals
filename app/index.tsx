import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const stack = createNativeStackNavigator();

export default function RootIndex() {
  return (
    <>
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
        <stack.Screen name="MealDetail" component={MealDetailScreen} />
      </stack.Navigator>
    </>
  );
}
