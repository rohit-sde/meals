import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ children }: { children: string }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
