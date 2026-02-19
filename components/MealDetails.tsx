import { StyleSheet, Text, View } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
}: {
  duration: number;
  complexity: string;
  affordability: string;
}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailText}>{duration} min</Text>
      <Text style={styles.detailText}>{complexity}</Text>
      <Text style={styles.detailText}>{affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 14,
  },
});
