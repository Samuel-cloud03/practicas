// // importaciones
// import { StyleSheet, View, Text, Switch, Button, ScrollView } from 'react-native';
// import { useState } from 'react';

// // componente principal
// const SettingsScreen = () => {
//   const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
//   const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

//   const toggleNotifications = () => setIsNotificationsEnabled(previous => !previous);
//   const toggleDarkMode = () => setIsDarkModeEnabled(previous => !previous);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Configuración</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Notificaciones</Text>
//         <Switch
//           value={isNotificationsEnabled}
//           onValueChange={toggleNotifications}
//         />
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Modo Oscuro</Text>
//         <Switch
//           value={isDarkModeEnabled}
//           onValueChange={toggleDarkMode}
//         />
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Idioma</Text>
//         <Button title="Cambiar" onPress={() => {  }} />
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Política de Privacidad</Text>
//         <Button title="Ver" onPress={() => {  }} />
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Términos y Condiciones</Text>
//         <Button title="Ver" onPress={() => {  }} />
//       </View>

//       <View style={styles.logoutContainer}>
//         <Button title="Cerrar Sesión" color="red" onPress={() => { }} />
//       </View>
//     </ScrollView>
//   );
// };

// // estilos
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     paddingBottom: 60,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//     color: '#333',
//   },
//   settingItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   settingText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   logoutContainer: {
//     marginTop: 40,
//     alignItems: 'center',
//   },
// });

// // exportaciones
// export default SettingsScreen;


/////////////////SEGUNDO PARATE

// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

// const SettingsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Configuración</Text>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="user" size={18} color="#fff" style={styles.icon} />
//         <Text style={styles.buttonText}>Editar Perfil</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="bell" size={18} color="#fff" style={styles.icon} />
//         <Text style={styles.buttonText}>Notificaciones</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="paint-brush" size={18} color="#fff" style={styles.icon} />
//         <Text style={styles.buttonText}>Preferencias de Tema</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="language" size={18} color="#fff" style={styles.icon} />
//         <Text style={styles.buttonText}>Idioma</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="lock" size={18} color="#fff" style={styles.icon} />
//         <Text style={styles.buttonText}>Cambiar Contraseña</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="info-circle" size={18} color="#fff" style={styles.icon} />
//         <Text style={styles.buttonText}>Acerca de la Aplicación</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="sign-out" size={18} color="#fff" style={styles.icon} />
//         <Text style={styles.buttonText}>Cerrar Sesión</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={[styles.button, styles.deleteButton]}>
//         <Icon name="trash" size={18} color="#fff" style={styles.icon} />
//         <Text style={styles.buttonText}>Eliminar Cuenta</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e6f3fb",
//     alignItems: "center",
//     padding: 20,
//     paddingTop: 50,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#005187",
//     marginBottom: 30,
//   },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#007bff",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     marginBottom: 15,
//     width: "100%",
//     elevation: 3,
//   },
//   deleteButton: {
//     backgroundColor: "#dc3545",
//   },
//   icon: {
//     marginRight: 12,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default SettingsScreen;

// TERCERA PARTE
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useEffect, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

// const SettingScreen = () =>{
//     const [darkMode, setDarkMode] = useState(false);

//     useEffect(() => {
//       const loadSettings = async () =>{
//         const storedDarkMode = await AsyncStorage.getItem('darkMode');
//         if(storedDarkMode !== null){
//           setDarkMode(storedDarkMode === 'true');
//         }
//       };
//       loadSettings();
//     });

//     const toggleDarkMode = async () =>{
//         const newValue = !darkMode;
//         setDarkMode(newValue);
//         await AsyncStorage.setItem('darkMode', newValue.toString());
//     };

//     const styles = StyleSheet.create({
//       container:{
//         flex: 1,
//         padding: 20,
//         backgroundColor: darkMode ? '#222': '#eaeeffff',
//       },
//       title:{
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//         color: darkMode ? '#fff': '#005187',
//       }
//     })
//     return(
//       <View style={styles.container}>
//           <Text style={styles.title}>Configuracion</Text>
//           <Switch value={darkMode} onValueChange={toggleDarkMode}></Switch>
//       </View>
//     )
// };
// export default SettingScreen;

//segunda parte
// export default function SettingScreen(){
//     return(
//       <View>
//         <Text style={styles.title}>Configuración</Text>

//        <TouchableOpacity style={styles.button}>
//          <Icon name="user" size={18} color="#fff" style={styles.icon} />
//          <Text style={styles.buttonText}>Editar Perfil</Text>
//        </TouchableOpacity>

//        <TouchableOpacity style={styles.button}>
//          <Icon name="bell" size={18} color="#fff" style={styles.icon} />
//          <Text style={styles.buttonText}>Notificaciones</Text>
//        </TouchableOpacity>

//        <TouchableOpacity style={styles.button}>
//          <Icon name="paint-brush" size={18} color="#fff" style={styles.icon} />
//          <Text style={styles.buttonText}>Preferencias de Tema</Text>
//        </TouchableOpacity>

//        <TouchableOpacity style={styles.button}>
//          <Icon name="language" size={18} color="#fff" style={styles.icon} />
//          <Text style={styles.buttonText}>Idioma</Text>
//        </TouchableOpacity>

//        <TouchableOpacity style={styles.button}>
//          <Icon name="lock" size={18} color="#fff" style={styles.icon} />
//          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
//        </TouchableOpacity>

//        <TouchableOpacity style={styles.button}>
//          <Icon name="info-circle" size={18} color="#fff" style={styles.icon} />
//          <Text style={styles.buttonText}>Acerca de la Aplicación</Text>
//        </TouchableOpacity>

//        <TouchableOpacity style={styles.button}>
//          <Icon name="sign-out" size={18} color="#fff" style={styles.icon} />
//          <Text style={styles.buttonText}>Cerrar Sesión</Text>
//        </TouchableOpacity>

//        <TouchableOpacity style={[styles.button, styles.deleteButton]}>
//          <Icon name="trash" size={18} color="#fff" style={styles.icon} />
//          <Text style={styles.buttonText}>Eliminar Cuenta</Text>
//        </TouchableOpacity>
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: "#e6f3fb",
//      alignItems: "center",
//      padding: 20,
//      paddingTop: 50,
//    },
//    title: {
//      fontSize: 26,
//      fontWeight: "bold",
//      color: "#005187",
//      marginBottom: 30,
//    },
//    button: {
//      flexDirection: "row",
//      alignItems: "center",
//      backgroundColor: "#007bff",
//      paddingVertical: 12,
//      paddingHorizontal: 20,
//      borderRadius: 12,
//      marginBottom: 15,
//      width: "100%",
//      elevation: 3,
//    },
//    deleteButton: {
//      backgroundColor: "#dc3545",
//    },
//    icon: {
//      marginRight: 12,
//    },
//    buttonText: {
//      color: "#fff",
//      fontSize: 16,
//      fontWeight: "bold",
//    },
//  });

// TERCERA PARTE

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useEffect, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

// export default function SettingScreen() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const loadSettings = async () => {
//       const storedDarkMode = await AsyncStorage.getItem("darkMode");
//       if (storedDarkMode !== null) {
//         setDarkMode(storedDarkMode === "true");
//       }
//     };
//     loadSettings();
//   }, []);

//   const toggleDarkMode = async () => {
//     const newValue = !darkMode;
//     setDarkMode(newValue);
//     await AsyncStorage.setItem("darkMode", newValue.toString());
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: darkMode ? "#111" : "#e6f3fb",
//       alignItems: "center",
//       padding: 20,
//       paddingTop: 50,
//     },
//     title: {
//       fontSize: 26,
//       fontWeight: "bold",
//       color: darkMode ? "#fff" : "#005187",
//       marginBottom: 30,
//     },
//     button: {
//       flexDirection: "row",
//       alignItems: "center",
//       backgroundColor: darkMode ? "#333" : "#007bff",
//       paddingVertical: 12,
//       paddingHorizontal: 20,
//       borderRadius: 12,
//       marginBottom: 15,
//       width: "100%",
//       elevation: 3,
//     },
//     deleteButton: {
//       backgroundColor: "#dc3545",
//     },
//     icon: {
//       marginRight: 12,
//       color: "#fff",
//     },
//     buttonText: {
//       color: "#fff",
//       fontSize: 16,
//       fontWeight: "bold",
//     },
//     switchContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       marginBottom: 30,
//     },
//     switchLabel: {
//       fontSize: 16,
//       marginRight: 10,
//       color: darkMode ? "#ccc" : "#333",
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Configuración</Text>

//       {/* Modo oscuro */}
//       <View style={styles.switchContainer}>
//         <Text style={styles.switchLabel}>Modo Oscuro</Text>
//         <Switch value={darkMode} onValueChange={toggleDarkMode} />
//       </View>

//       {/* Botones */}
//       <TouchableOpacity style={styles.button}>
//         <Icon name="user" size={18} style={styles.icon} />
//         <Text style={styles.buttonText}>Editar Perfil</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="bell" size={18} style={styles.icon} />
//         <Text style={styles.buttonText}>Notificaciones</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="paint-brush" size={18} style={styles.icon} />
//         <Text style={styles.buttonText}>Preferencias de Tema</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="language" size={18} style={styles.icon} />
//         <Text style={styles.buttonText}>Idioma</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="lock" size={18} style={styles.icon} />
//         <Text style={styles.buttonText}>Cambiar Contraseña</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="info-circle" size={18} style={styles.icon} />
//         <Text style={styles.buttonText}>Acerca de la Aplicación</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Icon name="sign-out" size={18} style={styles.icon} />
//         <Text style={styles.buttonText}>Cerrar Sesión</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={[styles.button, styles.deleteButton]}>
//         <Icon name="trash" size={18} style={styles.icon} />
//         <Text style={styles.buttonText}>Eliminar Cuenta</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeContext } from "../context/themeContext"; 

export default function SettingScreen() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

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
    deleteButton: {
      backgroundColor: "#dc3545",
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
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 30,
    },
    switchLabel: {
      fontSize: 16,
      marginRight: 10,
      color: darkMode ? "#ccc" : "#333",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      {/* Modo oscuro */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Modo Oscuro</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Botones */}
      <TouchableOpacity style={styles.button}>
        <Icon name="user" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="bell" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="paint-brush" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Preferencias de Tema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="language" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Idioma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="lock" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="info-circle" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Acerca de la Aplicación</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="sign-out" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deleteButton]}>
        <Icon name="trash" size={18} style={styles.icon} />
        <Text style={styles.buttonText}>Eliminar Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}
