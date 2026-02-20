import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function IconButton({
  icon,
  color,
  onPress,
}: {
  icon: any;
  color: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}
