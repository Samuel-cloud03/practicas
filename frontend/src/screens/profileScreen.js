// // importaciones
// import { StyleSheet, View, Button, Text, Image } from "react-native";

// // componente principal
// const ProfileScreen = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.profileContainer}>
//                 <Image
//                     source={{ uri: 'https://yt3.googleusercontent.com/a2tP5MIpeAosi1rl4PwhiuTSDX36V_f0lnm-qeyEm1j_nVFr5gam8sIID-TJfeqDlst3gB8-JBQ=s900-c-k-c0x00ffffff-no-rj' }}
//                     style={styles.avatar}
//                 />
//                 <Text style={styles.name}>Samuel Gómez</Text>
//                 <Text style={styles.email}>samuel.gomez23@itca.edu.sv</Text>
//             </View>

//             <View style={styles.actions}>
//                 <Button title="Editar Perfil" onPress={() => { }} />
//                 <View style={styles.spacer}></View>
//                 <Button title="Configuración" onPress={() => { }} />
//                 <View style={styles.spacer}></View>
//                 <Button title="Cerrar Sesión" color="red" onPress={() => { }} />
//             </View>
//         </View>
//     );
// };

// // constante para estilos
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         paddingTop: 60,
//     },
//     profileContainer: {
//         alignItems: 'center',
//         marginBottom: 40,
//     },
//     avatar: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         marginBottom: 15,
//         borderWidth: 2,
//         borderColor: '#ccc',
//     },
//     name: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     email: {
//         fontSize: 16,
//         color: '#777',
//         marginTop: 4,
//     },
//     actions: {
//         width: '80%',
//     },
//     spacer: {
//         height: 20,
//     }
// });

// // exportaciones
// export default ProfileScreen;

import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PatientProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Icon name="child" size={70} color="#D84315" />
      </View>

      {/* Título */}
      <Text style={styles.title}>Perfil del Paciente</Text>

      {/* Datos */}
      <View style={styles.infoBox}>
        <Icon name="user" size={18} color="#D84315" style={styles.icon} />
        <Text style={styles.infoText}>Nombre: María Pérez</Text>
      </View>

      <View style={styles.infoBox}>
        <Icon name="birthday-cake" size={18} color="#D84315" style={styles.icon} />
        <Text style={styles.infoText}>Edad: 7 años</Text>
      </View>

      <View style={styles.infoBox}>
        <Icon name="heartbeat" size={18} color="#D84315" style={styles.icon} />
        <Text style={styles.infoText}>Condición: Asma</Text>
      </View>

      {/* Info del Responsable */}
      <Text style={styles.subtitle}>Información del Responsable</Text>

      <View style={styles.infoBox}>
        <Icon name="user-circle" size={18} color="#D84315" style={styles.icon} />
        <Text style={styles.infoText}>Nombre: José Pérez</Text>
      </View>

      <View style={styles.infoBox}>
        <Icon name="phone" size={18} color="#D84315" style={styles.icon} />
        <Text style={styles.infoText}>Teléfono: +503 7213 7890</Text>
      </View>

      <View style={styles.infoBox}>
        <Icon name="users" size={18} color="#D84315" style={styles.icon} />
        <Text style={styles.infoText}>Relación: Padre</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff4e6",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },
  avatarContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D84315",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D84315",
    marginTop: 15,
    marginBottom: 10,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    width: "100%",
    marginBottom: 15,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
  },
});

export default PatientProfileScreen;
