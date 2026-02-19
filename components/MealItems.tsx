import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

type NavigationProp = NativeStackNavigationProp<any, "MealDetail">;

export default function MealItems({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}) {
  const navigation = useNavigation<NavigationProp>();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailText}>{duration} min</Text>
            <Text style={styles.detailText}>{complexity}</Text>
            <Text style={styles.detailText}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 14,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
