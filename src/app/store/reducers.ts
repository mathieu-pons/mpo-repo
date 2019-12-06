import { ActionReducerMap } from '@ngrx/store';

import * as fromTodos from '../todos/store/reducers';

export interface State {
    todos: fromTodos.State;
}

export const reducers: ActionReducerMap<State> = {
    todos: fromTodos.reducer
};

export const getAppState = (state: State) => state;
