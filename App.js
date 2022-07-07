import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Mash')
  const [session, setSession] = useState({ number: 6, title: 'state' })
  const [current, setCurrent] = useState(true)

  const onClickHandler = () => {
    setName('Programming With Mash')
    setSession({ number: 7, title: 'Style' })
    setCurrent(false)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='Update State' onPress={onClickHandler}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3d3d'
  }
});
