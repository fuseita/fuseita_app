import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        multiline
        style={styles.textInput}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: "90%",
    height: "80%",
    padding: 30,
    borderWidth: 1,
    borderColor: "#999"
  }
});
