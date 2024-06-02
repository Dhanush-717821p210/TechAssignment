import { Image,Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import Airblack from '@/components/Airblack';
import Certificate from '@/components/Certificate';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ImageBackground
          source={require('@/assets/images/back.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Professional Online 
          Makeup Course
        </ThemedText>
      </ThemedView>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={{uri: 'https://w7.pngwing.com/pngs/136/741/png-transparent-computer-icons-star-a-of-a-star-angle-leaf-triangle-thumbnail.png'}} style={styles.image} />
        <Text style={styles.text}>Rated 4.8/5</Text>
      </TouchableOpacity>
      <Text style={styles.text}>India's No.1 Online Makeup Course</Text>
      <Text style={styles.text}>Learn by LIVE Do-it-together Class</Text>
      <Text style={styles.text}>Unlimited Practice Session to Master Skills</Text>
      <Form/>
      <Airblack/>
      <Certificate/>
      <Footer/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 280,
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  text: {
    fontSize:20,
    margin:5
  },
  imageContainer: {
    borderRadius: 25,
    overflow: 'visible',
    flexDirection:'row',
    margin:10,
    padding:15,
  },
  image: {
    width: 30,
    height: 30,
  },
});

