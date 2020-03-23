import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from '../componemts/CategoryListItem';

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios.get('/categories')
      .then(res => {
        this.setState({
          categories: res.data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }


  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) =>
            <CategoryListItem
              category={item}
              onPress={() => navigation.navigate('Category', {
                categoryName: item.name
              })} />
          }
          keyExtractor={item => `${item.id}`}
          style={styles.title}
          contentContainerStyle={{}}
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
    justifyContent: 'center'
  },
  title: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16
  }
});
