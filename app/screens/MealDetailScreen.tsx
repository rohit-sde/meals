import MealDetails from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MealDetailScreen({ route, navigation }: any) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {selectedMeal?.ingredients.map((ingredient: string) => (
        <Text key={ingredient} style={styles.detailText}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal?.steps.map((step: string) => (
        <Text key={step} style={styles.detailText}>
          {step}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    margin: 4,
  },
});
