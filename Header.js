import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="Done"
          style={styles.input}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 50
    }
})

export default Header
