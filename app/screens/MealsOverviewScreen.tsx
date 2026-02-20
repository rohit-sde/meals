import MealsList from "@/components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

export default function MealsOverviewScreen({ route, navigation }: any) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList displayMeals={displayedMeals} />

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
