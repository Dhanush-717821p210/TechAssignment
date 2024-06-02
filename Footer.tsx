import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import icons from the FontAwesome5 package

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join our growing </Text>
      <Text style={styles.title}>communtity of</Text>
      <Text style={styles.title}>35000 alumni</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply Now</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="instagram" size={24} color="#405DE6" style={styles.icon} />
        <FontAwesome5 name="facebook" size={24} color="#1877F2" style={styles.icon} />
        <FontAwesome5 name="linkedin" size={24} color="#0077B5" style={styles.icon} />
        <FontAwesome5 name="twitter" size={24} color="#1DA1F2" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width:300,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    textAlign:'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Footer;
