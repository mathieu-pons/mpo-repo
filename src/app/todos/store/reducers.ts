import { ITodo } from '../models/todo.model';
import * as fromTodos from './actions';

export interface State {
    todos: ITodo[];
}

const initialState: State = {
    todos: []
};

export function reducer(state: State = initialState, action: fromTodos.TodoActionType): State {
    switch (action.type) {
        case fromTodos.INIT_TODO: {
            for (let index = 0; index < action.todos.length; index++) {
                const element = action.todos[index];
                if (element.completed === true) {
                    action.todos.push(element);
                    action.todos.splice(index, 1);
                }
            }
            return {
                ...state,
                todos: action.todos
            };
        }
        case fromTodos.ADD_TODO: {
            const todosNew = state.todos.map(todo => {
                return todo;
            });
            const todoNew = {
                id: action.id,
                title: action.title,
                description: action.description,
                completed: false
            };
            todosNew.splice(0, 0, todoNew);
            return {
                ...state,
                todos: todosNew
            };
        }
        case fromTodos.DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => action.id !== todo.id)
            };
        }

        case fromTodos.UPDATE_TODO: {
            const todosNew = state.todos.map(todo => {
                if (action.todo.id === todo.id) {
                    return {
                        ...todo,
                        completed: action.todo.completed
                    };
                } else {
                    return todo;
                }
            });
            for (let index = 0; index < todosNew.length; index++) {
                const element = todosNew[index];
                if (element.completed === true) {
                    todosNew.push(element);
                    todosNew.splice(index, 1);
                }
            }
            return {
                ...state,
                todos: todosNew
            };
        }
        case fromTodos.CLEAR_COMPLETED_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            };
        }
    }
}
