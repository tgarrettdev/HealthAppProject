// Dashboard.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Dummy patient data
    const dummyPatients = [
      {
        id: 1,
        name: 'John Doe',
        heartRate: 75,
        bloodPressure: '120/80',
        wellBeing: 'Good',
      },
      {
        id: 2,
        name: 'Jane Smith',
        heartRate: 90,
        bloodPressure: '140/90',
        wellBeing: 'Fair',
      },
    ];

    setPatients(dummyPatients);
  }, []);

  const checkVitals = (patient) => {
    // Example condition for checking vitals outside normal parameters
    const isBloodPressureHigh = parseInt(patient.bloodPressure.split('/')[0]) > 130;

    // Show alert if vitals are not within the normal range
    if (isBloodPressureHigh) {
      Alert.alert(
        'Alert',
        `Patient ${patient.name} has vitals outside normal parameters.`,
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: false }
      );
    }
  };

  const getBloodPressureColor = (bloodPressure) => {
    const systolic = parseInt(bloodPressure.split('/')[0]);

    if (systolic <= 120) {
      return '#A0E6A5'; // Light Green
    } else if (systolic > 120 && systolic <= 140) {
      return '#FBDFA7'; // Light Orange
    } else {
      return '#F8AFA6'; // Light Red
    }
  };

  const getTextColor = (backgroundColor) => {
    if (backgroundColor === '#A0E6A5' || backgroundColor === '#FBDFA7') {
      return 'black';
    } else {
      return 'white';
    }
  };

  const renderItem = ({ item }) => {
    const backgroundColor = getBloodPressureColor(item.bloodPressure);
    const textColor = getTextColor(backgroundColor);

    return (
      <TouchableOpacity
        style={[styles.patientItem, { backgroundColor }]}
        onPress={() => {
          checkVitals(item);
        }}
      >
        <Text style={[styles.patientName, { color: textColor }]}>{item.name}</Text>
        <Text style={{ color: textColor }}>Heart Rate: {item.heartRate}</Text>
        <Text style={{ color: textColor }}>Blood Pressure: {item.bloodPressure}</Text>
        <Text style={{ color: textColor }}>Well-being: {item.wellBeing}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <FlatList
        data={patients}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
    patientItem: {
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
    },
    patientName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    patientDetails: {
      color: 'black',
    },
  });
  
  export default Dashboard;
