import { FlatList, View } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";

function renderCategoryitem(itemData: any) {
  return <View></View>;
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryitem}
    />
  );
}
