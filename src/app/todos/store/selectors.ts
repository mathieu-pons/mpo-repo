import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromTodos from './reducers';

export const getTodoState = createFeatureSelector<fromTodos.State>('todos');

export const getTodos = createSelector(getTodoState, state => state);
