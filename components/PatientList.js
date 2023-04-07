// PatientList.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [sortOption, setSortOption] = useState('name');

  useEffect(() => {
    // Dummy patient data
    const dummyPatients = [
      {
        id: 1,
        name: 'John Doe',
        age: 45,
        healthStatus: 'Good',
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 30,
        healthStatus: 'Fair',
      },
    ];

    setPatients(dummyPatients);
  }, []);

  const sortPatients = (option) => {
    const sortedPatients = [...patients].sort((a, b) => {
      if (option === 'name') {
        return a.name.localeCompare(b.name);
      } else if (option === 'age') {
        return a.age - b.age;
      } else {
        return a.healthStatus.localeCompare(b.healthStatus);
      }
    });

    setSortOption(option);
    setPatients(sortedPatients);
  };

  const renderItem = ({ item }) => (
    <View style={styles.patientItem}>
      <Text style={styles.patientName}>{item.name}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Health Status: {item.healthStatus}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient List</Text>

      <View style={styles.sortOptions}>
        <TouchableOpacity onPress={() => sortPatients('name')}>
          <Text style={[styles.sortOption, sortOption === 'name' && styles.activeSortOption]}>
            Name
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortPatients('age')}>
          <Text style={[styles.sortOption, sortOption === 'age' && styles.activeSortOption]}>
            Age
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortPatients('healthStatus')}>
          <Text
            style={[styles.sortOption, sortOption === 'healthStatus' && styles.activeSortOption]}
          >
            Health Status
          </Text>
        </TouchableOpacity>
      </View>

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
  sortOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sortOption: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  activeSortOption: {
    fontWeight: 'bold',
  },
  patientItem: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default PatientList;
