import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({ oneProduct }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("details", { id: oneProduct.id })}
    >
      <View style={{ backgroundColor: "white", padding: 25, borderRadius: 20 }}>
        <Image
          style={{ width: 300, height: 200, borderRadius: 20 }}
          source={{ uri: oneProduct.img }}
          alt="product card"
        />
        <View>
          <Text>{oneProduct.price} сом</Text>
          <Text>{oneProduct.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
