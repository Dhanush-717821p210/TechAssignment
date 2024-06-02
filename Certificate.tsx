import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Certificate = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Get Certified From</Text>
        <Text style={styles.text}>India's Biggest</Text>
        <Text style={styles.text}>Beauty Platform</Text>
      <Image source={{uri: 'https://m.media-amazon.com/images/I/71+miIAZUVL.jpg'}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom:15,
  },
});

export default Certificate;
