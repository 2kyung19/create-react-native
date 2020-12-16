import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <ScrollView stlye={styles.scrollView}>
        <Text style={styles.title}>First View</Text>
        <View style={styles.view}>
          <Text>hello react native!</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            }}
          />
        </View>
        <TextInput style={styles.textInput} defaultValue="You can type in me" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  view: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default App;
