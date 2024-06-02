import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Form = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>WhatsApp Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your WhatsApp number"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Profession:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your profession"
      />
      <Text style={styles.label}>Goal:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal"
      />
      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your city"
      />
      <Button title="Submit"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    color: 'white',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    
  }
});

export default Form;

