import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Style Test')

  const onClickHandler = () => {
    setName('Programming with Mash')
  }

  // const [session, setSession] = useState({ number: 6, title: 'state' })
  // const [current, setCurrent] = useState(true)

  // const onClickHandler = () => {
  //   setName('Programming With Mash')
  //   setSession({ number: 7, title: 'Style' })
  //   setCurrent(false)
  // }

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
  },
  view1: {
    // width: 100,
    // height: 100,
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    // width: 100,
    // height: 100,
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    // width: 100,
    // height: 100,
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
