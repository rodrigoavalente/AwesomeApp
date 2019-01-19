/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import TodoList  from './components/todos/todo-list';
import AddTodo from './components/todos/add-todos';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  addTodo(text) {
    this.setState({todos: this.state.todos.concat([{text}])});    
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo add={(text) => this.addTodo(text)} />
        <TodoList todosList={this.state.todos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
