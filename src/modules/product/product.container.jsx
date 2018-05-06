// Library
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

// styles
import { styles } from './product.style';

// services
import { _products } from '../../common/services/product.mock';

// Redux-Connect
import connect from './redux/product.connect';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: _products,
      greeting: undefined,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <Text> I was here </Text>;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View> 
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <View testID={'welcome-'+ index } style={styles.container}>
              <TouchableOpacity testID={'hello_button_'+ index } onPress={this.onButtonPress.bind(this, 'Hello')}>
                <Text style={{color: 'blue', marginBottom: 20}}>Say Hello</Text>
              </TouchableOpacity>
              <TouchableOpacity testID={'world_button_'+ index } onPress={this.onButtonPress.bind(this, 'World')}>
                <Text style={{color: 'blue', marginBottom: 20}}>Say World</Text>
              </TouchableOpacity>
             <Text> {item.title} </Text>
             <Text> {item.price} </Text>
             <Text> {item.description} </Text>
            </View>
          )}
          keyExtractor={item => item.id.toString() }
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }

  renderAfterButton() {
    return (
      <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity testID='hello_button' onPress={this.onButtonPress.bind(this, undefined)}>
          <Text style={{fontSize: 25}}>
            {this.state.greeting}!!!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
}

export default connect(ProductList);
