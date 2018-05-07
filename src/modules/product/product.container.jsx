// Library
import React, { Component } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
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
      selectedIndex: undefined,
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
  return (
            <View style={{flex: 1, justifyContent: 'center', height: 60,
                          backgroundColor:'black', flexDirection: 'row', margin: 10}}>
                <Text style={{color: 'white', textAlign: 'center', paddingTop: 15, fontSize: 20,
                              justifyContent: 'center', alignItems: 'center'}}> 
                    Header 
                </Text>
            </View>   
         );
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
    if (this.state.selectedIndex !== undefined) return this.renderAfterButton();
    return (
      <View> 
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <View testID={'welcome-'+ index } style={styles.container}>
              <Text> {item.title} </Text>
              <Text> {item.price} </Text>
              <TouchableOpacity testID={'read_button_'+ index } onPress={this.onButtonPress.bind(this, index)}>
                <Text style={{color: 'blue', marginBottom: 20}}>Read</Text>
              </TouchableOpacity>
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
        <TouchableOpacity testID={'go_back'} onPress={this.onButtonPress.bind(this, undefined)}>
          <Text style={{color: 'blue', marginBottom: 20}}>Back</Text>
        </TouchableOpacity>
        <Text> {this.state.data[this.state.selectedIndex].title} </Text>
        <Text> {this.state.data[this.state.selectedIndex].price} </Text>
        <View style={{justifyContent: 'center', flexDirection: 'row', margin: 10}}>
          { 
            this.state.data[this.state.selectedIndex].images.map((image, index) => {
              return (
                        <Image
                          key={index}
                          style={{width: 100, height: 100}}
                          source={{uri: image.thumb }}
                        />
                      );
            })
          }
        </View>
        <Text style={{fontSize: 25}}>
          {this.state.data[this.state.selectedIndex].description}
        </Text>
      </View>
    );
  }

  onButtonPress(selectedIndex) {
    this.setState({
      selectedIndex: selectedIndex
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
