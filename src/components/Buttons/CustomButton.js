// CustomButton
import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class CustomButton extends Component {
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    borderColor: '#fff',
    onPress: () => null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: this.props.buttonColor,
            borderColor: this.props.borderColor,
          },
          this.props.style,
        ]}
        onPress={this.props.onPress}>
        <Text style={[styles.title, {color: this.props.titleColor}]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    fontSize: 15,
  },
});
