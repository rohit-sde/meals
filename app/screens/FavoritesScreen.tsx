import MealsList from "@/components/MealsList/MealsList";
import { MEALS } from "@/data/dummy-data";
// import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
// import { FavouriteContext } from "../store/Context/favourites-context";
import { useSelector } from "react-redux";
import { RootState } from "../store/Redux/favourites";

export default function FavoritesScreen() {
    // const { ids } = useContext(FavouriteContext);
    const favoriteIds = useSelector((state: RootState) => state.favorites.ids);

    const favoriteMeals = MEALS.filter((meal) => favoriteIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No favorite meals found</Text>
            </View>
        )
    }
    return (
        <MealsList displayMeals={favoriteMeals} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});
