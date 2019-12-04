import { ITodo } from '../models/todo.model';
import * as fromTodos from './action';

export interface State {
    todos: ITodo[];
}

const initialState: State {
  todos= []
};

export function reducer(state: State = initialState, action: fromTodos.TodoActionType): State {
  switch( action.type){

    case fromTodos.ADD_TODO: {
      return{
        ...state,
        todos:[
          ...state.todos,
          {
            id : action.id,
            title: action.description,
            completed: false,
          },
        ],
      };
    }
    case fromTodos.DELETE_TODO : {
      return {
        ...state,
        todos: state.todos.filter(todo => action.id !== todo.id),
      }
    }

    case fromTodos.UPDATE_TODO: {
      return {
        ...state,
        todos:  state.todos.map(todo => {
          if (action.id === todo.id) {
            return {
            ... todo,
            description: action.description,

            };
          } else {
            return todo;
          }
        }),
      };
    }
    case fromTodos.CLEAR_COMPLETED_TODO:{
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    }

  }

}
