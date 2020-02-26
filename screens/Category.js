import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Category extends React.Component {
  static navigationOptions = {
    title: 'Category'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Category Screen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});
