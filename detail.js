import { StyleSheet, Text, View } from 'react-native';
import {  } from 'react-native';
import { Button } from 'react-native-paper';

export default function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <Button
        icon="heart"
        mode="contained"
        onPress={() => navigation.navigate('Home')}
      >
        Go to Home
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: "100%",
    width: "100%"
  },
})
