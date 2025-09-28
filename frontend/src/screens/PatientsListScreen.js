import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { ThemeContext } from "../context/themeContext";

const PatientsListScreen = () => {
  const db = useSQLiteContext();
  const [patients, setPatients] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  // cargar pacientes al abrir pantalla
  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await db.getAllSync("SELECT * FROM patients");
    setPatients(result);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: darkMode ? "#111" : "#fcffff",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: darkMode ? "#fff" : "#005187",
    },
    itemContainer: {
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: darkMode ? "#333" : "#e1e0e0ff",
    },
    itemText: {
      fontSize: 16,
      color: darkMode ? "#fff" : "#000",
      marginBottom: 4,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pacientes</Text>

      <FlatList
        data={patients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>👤 {item.name}</Text>
            <Text style={styles.itemText}>🏠 {item.address || "No registrado"}</Text>
            <Text style={styles.itemText}>📞 {item.phone || "No registrado"}</Text>
            <Text style={styles.itemText}>🎂 {item.birthdate || "No registrado"}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PatientsListScreen;