import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator, StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Round and Round and Round</Text>
        <ActivityIndicator size='large' color='blue' />
        <View>
          <TouchableOpacity
            style={styles.button}
            onPressIn={this.onPress}
            onLongPress={this.reset}
          >
            <Text style={styles.btntxt}> Hit ME!!! </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.reset}
          >
            <Text style={styles.btntxt}> Click me to Reset </Text>
          </TouchableOpacity>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>
              {this.state.count !== 0 ? this.state.count : null}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#55a8fd',
  },
  button: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#005068',
    color: 'white'
  },
  countText: {
    color: '#ff0000',
    fontSize: 22,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  btntxt: {
    color: 'white'
  }
});
