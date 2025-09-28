import {View,Text,TextInput,TouchableOpacity,FlatList,StyleSheet,Modal} from "react-native";

const AppointmentScreen = () => {
  const [appointments, setAppointments] = useState([
    {
      id: "1",
      date: "2024-08-01",
      time: "10:00 AM",
      patient: "Juan Pérez",
      reason: "Revisión general",
    },
    {
      id: "2",
      date: "2024-08-03",
      time: "11:00 AM",
      patient: "Ana García",
      reason: "Consulta de seguimiento",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patient, setPatient] = useState("");
  const [reason, setReason] = useState("");

  const addAppointment = () => {
    if (date && time && patient && reason) {
      const newAppointment = {
        id: Date.now().toString(),
        date,
        time,
        patient,
        reason,
      };
      setAppointments([...appointments, newAppointment]);
      setDate("");
      setTime("");
      setPatient("");
      setReason("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas Programadas</Text>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>Fecha: {item.date}</Text>
            <Text>Hora: {item.time}</Text>
            <Text>Paciente: {item.patient}</Text>
            <Text>Motivo: {item.reason}</Text>
          </View>
        )}
      />

      {/* Botón Nueva Cita */}
      <TouchableOpacity
        style={styles.newButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.newButtonText}>Nueva Cita</Text>
      </TouchableOpacity>

      {/* Modal para agregar nueva cita */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar Nueva Cita</Text>
            <TextInput
              style={styles.input}
              placeholder="Fecha (YYYY-MM-DD)"
              value={date}
              onChangeText={setDate}
            />
            <TextInput
              style={styles.input}
              placeholder="Hora (HH:MM AM/PM)"
              value={time}
              onChangeText={setTime}
            />
            <TextInput
              style={styles.input}
              placeholder="Paciente"
              value={patient}
              onChangeText={setPatient}
            />
            <TextInput
              style={styles.input}
              placeholder="Motivo"
              value={reason}
              onChangeText={setReason}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.addButton]}
                onPress={addAppointment}
              >
                <Text style={styles.buttonText}>Agregar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fcffff" },
  title: { fontSize: 22, fontWeight: "bold", color: "#000", marginBottom: 15, textAlign: "center" },

  itemContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  newButton: {
    marginTop: 20,
    backgroundColor: "#6c2bd9",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  newButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalButtons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  modalButton: { flex: 1, padding: 12, marginHorizontal: 5, borderRadius: 8, alignItems: "center" },
  addButton: { backgroundColor: "#6c2bd9" },
  cancelButton: { backgroundColor: "#dc3545" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default AppointmentScreen;