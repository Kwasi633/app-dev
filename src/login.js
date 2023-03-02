import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function LoginScreen() {
  return (
    <View>
    <View style={styles.header}>
      <Text>Getting Started</Text>
    </View>

      <View style={StyleSheet.body}></View>
      <View>
      <Text>Level of Study</Text>
      </View>

      <View >
      <TextInput style={{marginLeft: 10,}}>select Level of Study</TextInput>
      </View>

      <View>
      <Text style={{marginLeft: 10,}}>Specific Topic Of Interest</Text>
      </View>

      <View style={styles.studyInput}>
      <Text>Specific Topic Of Interest</Text>
      </View>

      <View style={styles.topicInput}>
      <TextInput>select Interest Subjects</TextInput>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    borderTopLeftRadius: 100,
    borderTopLeftRadius: 100,

  },
  body:{
    padding: 10,
    borderTopLeftRadius: 100,
    borderTopLeftRadius: 100,
  },
  studyInput:{
    backgroundColor: "white",
    width: 300,
    margin: 5,
    height: 40,
    alignItems: 'center',
    marginHorizontal:-50,
    padding: 4,
    borderRadius: 10,
  },

});

export default LoginScreen;
