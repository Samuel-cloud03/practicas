// //importaciones
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useContext, useEffect, useState } from "react";
// import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
// import { UserContext } from "../context/userContext";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// //nuestro componente principal
// const HomeScreen = () => {
//     const navigation = useNavigation();
//     // const { user } = useContext(UserContext);
//     const [user, setUser] = useState('');

//     useEffect(()=>{
//         const loadUser = async () =>{
//             const storedUser = await AsyncStorage.getItem('user');
//             if(storedUser){
//                 setUser(storedUser);
//             }
//         }
//         loadUser();
//     }, []);

//     const handleLogout = async() =>{
//         await AsyncStorage.removeItem('token');
//         await AsyncStorage.removeItem('user');
//         navigation.replace('Login');
//     }

//     return(
//             <View style={styles.container}>
//                 {/* <Text style={styles.title}>Bienvenido, {user?.username}, a la clinica pediatrica</Text> */}
//                 <Text style={styles.title}>Bienvenido, {user}, a la clinica pediatrica</Text>
//                 {/* <Button title="Perfil" onPress={() =>{ }} />
//                 <Button title="Configuracion" onPress={() =>{ }} /> */}
//                 <TouchableOpacity style={styles.buttonDanger} onPress={handleLogout}>
//                     <MaterialCommunityIcons name="logout" size={24} color={'#fff'}/>
//                     <Text style={styles.buttonText}>Cerrar sesion</Text>
//                 </TouchableOpacity>
//             </View>
//         );
// }
    
// //constante para estilos
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#EAEEFFFF',
//     },
//     title: {
//         // fontSize: 28,
//         // marginBottom: 20,
//         // color: '#333',
//         // textAlign: 'center'  
//         fontSize: 30,
//         marginBottom: 20,
//         fontWeight: 'bold',
//         color: '#005187',
//         textAlign: 'center'  
//     },
//     // spacer: {
//     //     height: 20,
//     // }
//     buttonText: {
//         color: '#fff',
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginLeft: 10
//     },
//     button:{
//         flexDirection: "row",
//         width: '80%',
//         padding: 10,
//         backgroundColor: '#005187',
//         borderRadius: 10,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,
//         alignSelf: 'center'
//     },
//     buttonDanger:{
//         flexDirection: "row",
//         width: '80%',
//         padding: 10,
//         backgroundColor: 'red',
//         borderRadius: 10,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,
//         alignSelf: 'center'
//     },
// });

// //exportaciones
// export default HomeScreen;


import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../context/themeContext";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) setUser(storedUser);
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    navigation.replace('Login');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: darkMode ? '#111' : '#EAEEFFFF',
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      fontWeight: 'bold',
      color: darkMode ? '#fff' : '#005187',
      textAlign: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10
    },
    buttonDanger: {
      flexDirection: "row",
      width: '80%',
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 10,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      alignSelf: 'center'
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {user}, a la clínica pediátrica</Text>
      <TouchableOpacity style={styles.buttonDanger} onPress={handleLogout}>
        <MaterialCommunityIcons name="logout" size={24} color={'#fff'} />
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
