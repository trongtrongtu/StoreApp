import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductListItem from '../componemts/ProductListItem';

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('https://0267b631.ngrok.io/products')
      .then(res => {
        this.setState({
          products: res.data
        })
      })
      .catch(eror => {
        console.error(eror)
      })
  }

  render() {
    return (
      <FlatList
        data={this.state.products}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) =>
          <View style={styles.wrapper}>
            <ProductListItem product={item} />
          </View>
        }
        keyExtractor={(item) => `${item.id}`} />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16
  },
  container: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8
  }
});
