import React, { useContext, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { productsContext } from "../context/ProductsContext";

export default function AddForm(navigation) {
  const { createProduct } = useContext(productsContext);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");

  function handleClick() {
    let newProduct = {
      img,
      title,
      info,
      price: +price,
    };
    if (!img.trim() || !title.trim() || !info.trim() || !price.trim()) {
      return Alert.alert("Заполните все поля");
    }

    createProduct(newProduct);
    navigation.navigate("home");
  }
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView contentContainerStyle={styles.form}>
            <TextInput
              value={img}
              onChangeText={(e) => setImg(e)}
              style={styles.form.input}
              placeholder="Вставьте ссылку для изоброжения..."
            />
            <TextInput
              value={title}
              onChangeText={(e) => setTitle(e)}
              style={styles.form.input}
              placeholder="Для названия..."
            />
            <TextInput
              value={info}
              onChangeText={(e) => setInfo(e)}
              style={styles.form.input}
              placeholder="Для описания..."
            />
            <TextInput
              value={price}
              onChangeText={(e) => setPrice(e)}
              style={styles.form.input}
              placeholder="Введите цену товара..."
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleClick} style={styles.form.button}>
              <Text style={styles.form.button.text}>Добавить продукт</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    gap: 10,
    marginHorizontal: "auto",
    paddingTop: 100,
    input: {
      width: 300,
      padding: 20,
      borderRadius: 10,
      backgroundColor: "white",
    },
    button: {
      backgroundColor: "orange",
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 30,
      marginTop: 20,
      text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
      },
    },
  },
});
