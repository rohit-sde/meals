import { CATEGORIES } from "@/data/dummy-data";
import CategoryGridTitle from "../../components/CategoryGridTile";

import { FlatList } from "react-native";

export default function CategoriesScreen({ navigation }: any) {
  function renderCategoryItem(itemData: any) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
      console.log("pressed");
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
