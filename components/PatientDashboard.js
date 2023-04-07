// PatientDashboard.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PatientDashboard = () => {
  const [currentPatient, setCurrentPatient] = useState({});

  useEffect(() => {
    // Dummy patient data for the current patient
    const dummyPatient = {
      id: 1,
      name: 'John Doe',
      heartRate: 75,
      bloodPressure: '120/80',
      wellBeing: 'Good',
    };

    setCurrentPatient(dummyPatient);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Dashboard</Text>
      <Text style={styles.label}>Name: </Text>
      <Text style={styles.value}>{currentPatient.name}</Text>
      <Text style={styles.label}>Heart Rate: </Text>
      <Text style={styles.value}>{currentPatient.heartRate}</Text>
      <Text style={styles.label}>Blood Pressure: </Text>
      <Text style={styles.value}>{currentPatient.bloodPressure}</Text>
      <Text style={styles.label}>Well-being: </Text>
      <Text style={styles.value}>{currentPatient.wellBeing}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default PatientDashboard;
