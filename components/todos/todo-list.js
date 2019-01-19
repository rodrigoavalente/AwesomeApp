import React from 'react';
import { View } from 'react-native';

import Todo from './todos';

class TodoList extends React.Component {
    render() {
        return(
            <View>
                {this.props.todosList.map(todo => <Todo text={todo.text} />)}
            </View>
        );
    }
}

export default TodoList;