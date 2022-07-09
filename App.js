import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Alert } from 'react-native';

import { useState } from 'react';

export default function App() {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!submitted);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput style={styles.input} placeholder='HEllO WORLD'
        onChangeText={(value) => setName(value)}
        multiline
        keyboardType='numeric'
        maxLength={4}
      />
      <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        disabled={submitted}
      />
      {
        submitted ?
          <Text style={styles.text}>
            You are registered as: {name}
          </Text>
          :
          null
      }

    </View>
  );

}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 15,
  }
  // view1: {
  //   // width: 100,
  //   // height: 100,
  //   flex: 1,
  //   backgroundColor: '#00ffff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // view2: {
  //   // width: 100,
  //   // height: 100,
  //   flex: 1,
  //   backgroundColor: '#ff00ff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // view3: {
  //   // width: 100,
  //   // height: 100,
  //   flex: 1,
  //   backgroundColor: '#ffff00',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
