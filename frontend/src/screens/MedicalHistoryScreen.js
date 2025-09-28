import { View, Text, StyleSheet, FlatList } from "react-native";

const MedicalHistoryScreen = () => {
  const history = [
    {
      id: "1",
      date: "2024-08-01",
      diagnosis: "Fiebre",
      treatment: "Paracetamol",
      notes: "Revisión en una semana",
    },
    {
      id: "2",
      date: "2024-07-15",
      diagnosis: "Gripe",
      treatment: "Reposo e hidratación",
      notes: "Tomar líquidos abundantes",
    },
    {
      id: "3",
      date: "2024-06-10",
      diagnosis: "Alergia",
      treatment: "Antihistamínicos",
      notes: "Evitar alérgenos conocidos",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historia Clínica</Text>

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text>Diagnóstico: {item.diagnosis}</Text>
            <Text>Tratamiento: {item.treatment}</Text>
            <Text>Notas: {item.notes}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fcffff" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  date: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default MedicalHistoryScreen;