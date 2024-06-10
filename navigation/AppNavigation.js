import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../screens/HomePage";
import AddForm from "../screens/AddForm";
import Details from "../screens/Details";
import EditForm from "../screens/EditForm";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitle: "Назад" }}>
        <Stack.Screen
          options={{ title: "Homie" }}
          name="home"
          component={HomePage}
        />
        <Stack.Screen
          options={{ title: "Форма добавления" }}
          name="add-form"
          component={AddForm}
        />
        <Stack.Screen
          options={{ title: "О продукте" }}
          name="details"
          component={Details}
        />
        <Stack.Screen
          options={{ title: "Изменить продукт" }}
          name="edit-form"
          component={EditForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
