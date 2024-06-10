import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ModalConfirmDelete({
  modalConfirm,
  setModalConfirm,
  handleDelete,
}) {
  const displayValue = modalConfirm ? "flex" : "none";
  return (
    <View style={[styles.container, { display: displayValue }]}>
      <View style={styles.containerInner}>
        <View style={styles.textParent}>
          <Text style={styles.firstText}>Подтверждение удаления</Text>
          <Text style={styles.secondText}>
            Вы действительно хотите удалить продукт?
          </Text>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            onPress={() => setModalConfirm(false)}
            style={[styles.btn, { backgroundColor: "skyblue" }]}
          >
            <Text style={styles.btnText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDelete}
            style={[styles.btn, { backgroundColor: "darkred" }]}
          >
            <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 45,
    paddingVertical: 13,
    borderRadius: 15,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  btnGroup: {
    flexDirection: "row",
    gap: "30px",
    marginTop: 50,
  },
  container: {
    backgroundColor: "#00000090",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  textParent: {
    maxWidth: "80%",
    gap: 10,
  },
  firstText: {
    fontSize: 21,
    fontWeight: "bold",
  },
  containerInner: {
    backgroundColor: "lightblue",
    padding: 30,
    borderRadius: 20,
  },
});
