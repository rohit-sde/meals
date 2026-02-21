import IconButton from "@/components/IconButton";
import List from "@/components/MealDetail/List";
import Subtitle from "@/components/MealDetail/Subtitle";
import MealDetails from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FavouriteContext } from "../store/Context/favourites-context";

export default function MealDetailScreen({ route, navigation }: any) {
  const mealId = route.params.mealId;
  const { ids, addFavourite, removeFavourite } = useContext(FavouriteContext);

  const isFavourite = ids.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function changeFavouriteStatusHandler() {
    if (isFavourite) {
      removeFavourite(mealId);
    } else {
      addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [isFavourite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List valuesArray={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List valuesArray={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
