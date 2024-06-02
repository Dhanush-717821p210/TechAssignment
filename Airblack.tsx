import React from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';

const Airblack = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why should you</Text>
      <Text style={styles.title}>Join Airblack?</Text>
      <View style={styles.container1}>

      <TouchableOpacity style={styles.imageContainer}>
        <Image source={{uri: 'https://image.similarpng.com/very-thumbnail/2021/10/Zoom-icon-illustration-on-transparent-background-PNG.png'}} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={{uri: 'https://w7.pngwing.com/pngs/136/741/png-transparent-computer-icons-star-a-of-a-star-angle-leaf-triangle-thumbnail.png'}} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={{uri: 'https://e7.pngegg.com/pngimages/749/142/png-clipart-teamwork-computer-icons-others-blue-photography-thumbnail.png'}} style={styles.image} />
      </TouchableOpacity>
</View>
      <View style={styles.detailsContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Live in zoom</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Rated classes</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>3500+ members</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1:{
    display:'flex',
    flexDirection:'row'
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
    margin: 20,
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
  imageContainer: {
    borderRadius: 25,
    overflow: 'visible',
    display:'flex',
    margin:20,
    padding:15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  detailsContainer: {
    marginLeft: 10,
    flexDirection:'row',
    padding:10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Airblack;
