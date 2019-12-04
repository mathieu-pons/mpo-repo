import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromTodos from './reducers';
import { ITodo } from '../models/todo.model';

export const getTodoState = createFeatureSelector<fromTodos.State>('todos');

export const getTodos = createSelector(getTodoState, state => state.todos);
