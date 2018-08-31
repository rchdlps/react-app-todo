import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as TodoActions from "~/store/actions/todos";

class TodoList extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.input.value);

    this.input.value = "";
  };

  render() {
    const { todos, toggleTodo, removeTodo } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="Text" ref={el => (this.input = el)} />
          <button type="submit">Novo ToDo</button>
        </form>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.complete ? <s>{todo.text}</s> : todo.text}
              <div>
                <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
