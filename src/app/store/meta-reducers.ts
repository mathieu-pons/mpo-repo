import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import * as fromApp from './reducers';

export function logger(reducer: ActionReducer<fromApp.State>): ActionReducer<fromApp.State> {
    return function(state: fromApp.State, action: Action): fromApp.State {
        const newState = reducer(state, action);
        return newState;
    };
}

export const metaReducers: MetaReducer<fromApp.State>[] = environment.production ? [] : [logger, storeFreeze];
