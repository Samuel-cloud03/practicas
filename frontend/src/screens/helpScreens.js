import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext"; 

export default function HelpScreen() {
  const { darkMode } = useContext(ThemeContext); 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? "#111" : "#e6f3fb",
      alignItems: "center",
      padding: 20,
      paddingTop: 50,
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      color: darkMode ? "#fff" : "#005187",
      marginBottom: 30,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: darkMode ? "#333" : "#007bff",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 12,
      marginBottom: 15,
      width: "100%",
      elevation: 3,
    },
    icon: {
      marginRight: 12,
      color: "#fff",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayuda</Text>

      <TouchableOpacity style={styles.button}>
        <Icon name="question-circle" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Preguntas Frecuentes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="envelope" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Contactar Soporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="book" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Guía de Usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="bug" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Reportar un Problema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="comments" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Enviar Comentarios</Text>
      </TouchableOpacity>
    </View>
  );
}
