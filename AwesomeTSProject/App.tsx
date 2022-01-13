import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [text, setText] = useState<string>('');

  const changeTextColor = () => {
    if (MAX_CHAR - text.length <= 10 && MAX_CHAR - text.length > 0) {
      return '#CCCC00';
    } else if (MAX_CHAR - text.length <= 0) {
      return 'red';
    } else if (MAX_CHAR - text.length > 10) {
      return 'gray';
    }
  };

  const MAX_CHAR = 280;
  return (
    <SafeAreaView>
      <View style={styles.layout}>
        <TextInput
          style={[styles.textbox, {borderColor: changeTextColor()}]}
          multiline={true}
          numberOfLines={8}
          placeholder="Tweet here"
          onChangeText={text => setText(text)}
          value={text}
        />
        <Text style={{color: changeTextColor(), fontSize: 18}}>
          {MAX_CHAR - text.length} words remanining
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    width: '90%',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    textAlignVertical: 'top',
  },
});

export default App;
