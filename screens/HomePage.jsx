import React, { useContext, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductsContextProvider, {
  productsContext,
} from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function HomePage({ navigation }) {
  const { products, getProducts } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View>
      <View style={styles.addBtnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("add-form")}
          style={styles.goToAddFormBtn}
        >
          <Text style={styles.goToAddFormBtn.text}>Добавить Продукт</Text>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInset={{ bottom: 200 }}
          contentContainerStyle={styles.cardParent}
        >
          {products.map((item) => (
            <ProductCard key={item.id} oneProduct={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goToAddFormBtn: {
    backgroundColor: "orange",
    paddingHorizontal: 35,
    paddingVertical: 15,
    maxWidth: 300,
    borderRadius: 20,
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  addBtnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  cardParent: {
    gap: 20,
    marginTop: 50,
  },
});
