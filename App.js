import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from './componemts/CategoryListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Máy tính Asus' },
        { id: 2, name: 'Máy tính Apple' },
        { id: 3, name: 'Máy tính Hp' },
        { id: 4, name: 'Máy tính Dell' },
        { id: 5, name: 'Máy tính Lenovo' },
        { id: 6, name: 'Máy tính Msi' }
      ]
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryListItem category={item} />}
          keyExtractor={item => `${item.id}`}
          style={styles.title}
          contentContainerStyle={{ backgroundColor: 'red' }}
        />
      </View>
    );
  }
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
