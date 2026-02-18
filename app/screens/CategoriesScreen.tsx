import CategoryGridTile from "@/components/CategoryGridTile";
import { FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";

function renderCategoryitem(itemData: {
  item: { title: string; color: string };
}) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryitem}
      numColumns={2}
    />
  );
}
