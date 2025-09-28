import { useState, useContext, useEffect } from "react";
import { Text, TextInput, StyleSheet, View, TouchableOpacity, FlatList, Image, Alert } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { useSQLiteContext } from "expo-sqlite";

// const UserInterfaceScreen = () => {
//     const [inputText, setInputText] = useState('');
//     const [patients, setPatients] = useState([]);
//     const [isFocused, setIsFocused] = useState();

//     //Agregar paciente
//     const addPatient = () =>{
//         if(inputText.trim()){
//             const newPatient = {
//                 id:Date.now().toString(),
//                 name: inputText,
//             };
//             setPatients([...patients, newPatient]);
//             setInputText('');
//         }
    
//     }
//     //Editar paciente
//     const editPatient = (id) =>{
//         const patientToEdit = patients.find((p) => p.id === id);
//         if(patientToEdit){
//             setInputText(patientToEdit.name)
//             deletePatient(id);
//         }
//     }
//     //Eliminar paciente
//     const deletePatient = (id) =>{
//         setPatients(patients.filter((patient) => patient.id !== id));
//     }

//     return(
//         <View style={styles.container}>
//             <Text style={styles.title}>Gestion de pacientes</Text>
//             <TextInput style={[styles.input, {
//                             borderWidth: isFocused ? 3 : 1
//                         }]}
//                         placeholder="Nombre del paciente"
//                         value={inputText}
//                         onChangeText={setInputText}
//                         onFocus={()=> setIsFocused(true)}
//                         onBlur={() => setIsFocused(false)}
//             />
//             <TouchableOpacity style={styles.addButton} onPress={addPatient}>
//                         <Text style={styles.addButtonText}>Agregar paciente</Text>
//             </TouchableOpacity>

//             <Text style={styles.counter}>pacientes registrados: {patients.length}</Text>
//             <FlatList
//                 data={patients}
//                 keyExtractor={(item) => item.id}
//                 contentContainerStyle={{alignItems: 'center', width: '100%'}}
//                 renderItem={({item}) => (
//                     <View style={styles.itemContainer}>
//                         <Text style={styles.itemText}>{item.name}</Text>
//                         <View style={styles.buttonGroup}>
//                             <TouchableOpacity style={styles.editButton} onPress={() =>editPatient (item.id)}>
//                                         <Text style={styles.buttonText}>Modificar</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.deleteButton} onPress={() =>deletePatient (item.id)}>
//                                         <Text style={styles.buttonText}>Eliminar</Text>
//                             </TouchableOpacity>    
//                         </View>    
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1, //Permite que el contenedor crezca en funcion del contenido
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         padding: 20,
//         paddingTop: 50,
//         backgroundColor: '#fcffff'
//     },
//     title: {
//         fontSize: 30,
//         margin: 20,
//         textAlign: 'center',
//         fontWeight: 'bold',
//         color: '#005187'
//     },
//     input:{
//         height: 50,
//         borderColor: '#005187',
//         borderWidth: 1,
//         borderRadius: 10,
//         margin: 10,
//         padding: 10,
//         width: '100%',
//         backgroundColor: '#ffffff'
//     },
//     addButton: {
//         width: '100%',
//         backgroundColor: '#005187',
//         borderRadius: 10,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     addButtonText:{
//         color: '#ffffff',
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     counter:{
//         margin: 15,
//         fontSize: 18,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },
//     itemContainer:{
//         padding: 10,
//         margin: 10,
//         backgroundColor: '#e1e0e0ff',
//         borderRadius: 5,
//         width: '100%',
//         flexDirection: 'column',
//         alignItems: 'center'
//     },
//     itemText:{
//         fontSize: 18,
//         margin: 10,
//         flexWrap: 'wrap',

//     },
//     buttonGroup:{
//         flexDirection: 'row',
//         gap: 10,
//     },
//     editButton:{
//         backgroundColor: '#ffc107',
//         padding: 10,
//         width: '40%',
//         borderRadius: 5,
//         marginLeft: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     deleteButton:{
//         backgroundColor: '#dc3545',
//         padding: 10,
//         width: '40%',
//         borderRadius: 5,
//         marginLeft: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonText:{
//         color: '#ffffff',
//         fontWeight: 'bold'
//     },
// })
               
// export default UserInterfaceScreen


const UserInterfaceScreen = () => {
  const db = useSQLiteContext();
  const [editingId, setEditingId] = useState(null);
  const [inputText, setInputText] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [patients, setPatients] = useState([]);
  const [isFocused, setIsFocused] = useState();
  const { darkMode } = useContext(ThemeContext);

  //MOSTRAR
  useEffect(() =>{
    loadPatients();
  }, [])

  const loadPatients = async () => {
    const result = await db.getAllSync("SELECT * FROM patients");
    setPatients(result);
  }

  // Estilos dinámicos
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 20,
      paddingTop: 50,
      marginBottom: 20,
      backgroundColor: darkMode ? "#111" : "#fcffff",
    },
    title: {
      fontSize: 30,
      margin: 20,
      textAlign: "center",
      fontWeight: "bold",
      color: darkMode ? "#fff" : "#005187",
    },
    input: {
      height: 50,
      borderColor: darkMode ? "#aaa" : "#005187",
      borderWidth: isFocused ? 3 : 1,
      borderRadius: 10,
      margin: 10,
      padding: 10,
      width: "100%",
      backgroundColor: darkMode ? "#222" : "#ffffff",
      color: darkMode ? "#fff" : "#000",
    },
    addButton: {
      width: "100%",
      backgroundColor: "#005187",
      borderRadius: 10,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    addButtonText: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
    },
    counter: {
      margin: 15,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      color: darkMode ? "#ccc" : "#000",
    },
    itemContainer: {
      padding: 10,
      margin: 10,
      backgroundColor: darkMode ? "#333" : "#e1e0e0ff",
      borderRadius: 5,
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    itemText: {
      fontSize: 18,
      margin: 5,
      flexWrap: "wrap",
      color: darkMode ? "#fff" : "#000",
    },
    buttonGroup: {
      flexDirection: "row",
      gap: 10,
      marginTop: 10,
      alignSelf: "center",
    },
    editButton: {
      backgroundColor: "#ffc107",
      padding: 10,
      width: "40%",
      borderRadius: 5,
      marginLeft: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    deleteButton: {
      backgroundColor: "#dc3545",
      padding: 10,
      width: "40%",
      borderRadius: 5,
      marginLeft: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#ffffff",
      fontWeight: "bold",
    },
  });

  // Lógica
  const addPatient = async () => {
    if(inputText.trim()){
      if(editingId){ //editando
        await db.runAsync(
          "UPDATE patients SET name = ?, address = ?, phone = ?, birthdate = ? WHERE id = ?",
          [inputText, address, phone, birthdate, editingId]
        );
        setEditingId(null);
        Alert.alert("Éxito", "Paciente actualizado con éxito")
      }else{ //agregar
        await db.runAsync(
          "INSERT INTO patients (name, address, phone, birthdate) VALUES (?, ?, ?, ?)",
          [inputText, address, phone, birthdate]
        );
        Alert.alert("Éxito", "Paciente agregado con éxito")
      }
      setInputText("");
      setAddress("");
      setPhone("");
      setBirthdate("");
      loadPatients();
    }else{
      Alert.alert("Error", "El nombre no puede estar vacío");
    }
  };

  const editPatient = (id) => {
    const patientToEdit = patients.find((p) => p.id === id);
    if (patientToEdit) {
      setInputText(patientToEdit.name);
      setAddress(patientToEdit.address || "");
      setPhone(patientToEdit.phone || "");
      setBirthdate(patientToEdit.birthdate || "");
      setEditingId(id);
    }
  };

  const deletePatient = async (id) => {
    await db.runAsync("DELETE FROM patients WHERE id = ?", [id]);
    Alert.alert("Éxito", "Paciente eliminado con éxito")
    loadPatients();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de pacientes</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del paciente"
        placeholderTextColor={darkMode ? "#aaa" : "#999"}
        value={inputText}
        onChangeText={setInputText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        placeholderTextColor={darkMode ? "#aaa" : "#999"}
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        placeholderTextColor={darkMode ? "#aaa" : "#999"}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento (YYYY-MM-DD)"
        placeholderTextColor={darkMode ? "#aaa" : "#999"}
        value={birthdate}
        onChangeText={setBirthdate}
      />

      <TouchableOpacity style={styles.addButton} onPress={addPatient}>
        <Text style={styles.addButtonText}>
            {editingId ? "Actualizar Paciente" : "Agregar Paciente"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.counter}>
        Pacientes registrados: {patients.length}
      </Text>

      <FlatList
        data={patients}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center", width: "100%" }}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>👤 {item.name}</Text>
            <Text style={styles.itemText}>🏠 {item.address}</Text>
            <Text style={styles.itemText}>📞 {item.phone}</Text>
            <Text style={styles.itemText}>🎂 {item.birthdate}</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => editPatient(item.id)}
              >
                <Text style={styles.buttonText}>Modificar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deletePatient(item.id)}
              >
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default UserInterfaceScreen;
