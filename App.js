import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Alert, ToastAndroid, Modal } from 'react-native';

import { useState } from 'react';

export default function App() {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      // Alert.alert('Warnings', 'The name must be longer than 3 characters', [
      //   { text: '응', onPress: () => console.log('응을 누르셨습니다.'), onPress: () => console.warn('응을 누르셨습니다.') },
      //   { text: '아니', onPress: () => console.log('아니를 누르셨습니다.'), onPress: () => console.warn('아니를 누르셨습니다.') },
      //   { text: '그래', onPress: () => console.log('그래를 누르셨습니다.'), onPress: () => console.warn('그래를 누르셨습니다.') },
      // ], { cancelable: true, onDismiss: () => console.warn('Alert dismissed!') })

      // ToastAndroid.showWithGravityAndOffset(
      //   'The name must be longer than 3 characters',
      //   ToastAndroid.LONG,
      //   ToastAndroid.TOP,
      //   0,
      //   200
      // )

      setShowWarning(true);
    }
  }

  return (
    <View style={styles.body}>
      <Modal visible={showWarning} onRequestClose={() => { setShowWarning(false); }}>
        <Text>The name must be longer than 3 characters</Text>
      </Modal>
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
