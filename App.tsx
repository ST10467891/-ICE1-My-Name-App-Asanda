
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[userInput,setUserInput] = useState('');
  const handlePress = () => {
    console.log('User Input:' , userInput)
  }
  return (
    <View style={styles.container}>
      <Text>HELLO, ASANDA!</Text>
      <TextInput
       placeholder="HI, Viewer what's your name? Enter here please!"
       value={userInput}
       onChangeText={setUserInput}
      />
      <Button 
      title="Click Me"
      onPress={handlePress}
      />
      <Text>user name verified</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800020a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
