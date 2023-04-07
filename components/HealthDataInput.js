// HealthDataInput.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HealthDataInput = () => {
  const [heartRate, setHeartRate] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [wellBeing, setWellBeing] = useState('');
  const [wakeUpTime, setWakeUpTime] = useState('');

  const handleSubmit = () => {
    // Process the submitted data, e.g., save to the database
    console.log('Submitted:', { heartRate, bloodPressure, wellBeing, wakeUpTime });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Data Input</Text>

      <Text style={styles.label}>Heart Rate:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setHeartRate}
        value={heartRate}
        keyboardType="number-pad"
      />

      <Text style={styles.label}>Blood Pressure:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setBloodPressure}
        value={bloodPressure}
        placeholder="e.g., 120/80"
      />

      <Text style={styles.label}>Well-being:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setWellBeing}
        value={wellBeing}
        placeholder="e.g., Good, Fair, Poor"
      />

      <Text style={styles.label}>Wake-up Time:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setWakeUpTime}
        value={wakeUpTime}
        keyboardType="number-pad"
        placeholder="e.g., 07:00"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
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
    marginBottom: 5,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  submitButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HealthDataInput;
