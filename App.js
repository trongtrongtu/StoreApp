import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CategoryListItem from './componemts/CategoryListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.title} contentContainerStyle={{ backgroundColor: 'red' }}>
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'black'
  }
});
