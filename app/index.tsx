import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { store } from "./store/Redux/store";

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#4a148c",
      },
      headerTintColor: "white",
      drawerContentStyle: {
        backgroundColor: "#774aad",
      }, sceneStyle: {
        backgroundColor: "#4a148c",
      },
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#ffffffff",
      drawerActiveBackgroundColor: "#4a148c",
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories",
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function RootIndex() {
  return (
    <>
      {/* <FavouriteContextProvider> */}
      <Provider store={store}>

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
            name="CategorieDrawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <stack.Screen name="MealDetail" component={MealDetailScreen} />
        </stack.Navigator>
      </Provider>
      {/* </FavouriteContextProvider> */}
    </>
  );
}
