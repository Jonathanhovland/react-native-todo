import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    }
    this.handleAddItem =this.handleAddItem.bind(this)
  }

  handleAddItem () {
    if(!this.state.value) return
    const newItem = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ]
    this.setState({
      items: newItem,
      value: ""
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={(value) => this.setState({ value })}
          />
        <Text style={styles.context}> App </Text>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    ...Platform.select({
      ios: { paddingTop: 200 }
    })
  },
  content: {
    flex: 1
  }
})

export default App