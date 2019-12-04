import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] add';
export const DELETE_TODO = '[TODO] delete';
export const UPDATE_TODO = '[TODO] update';
export const CLEAR_COMPLETED_TODO = '[TODO] clearCompleted';

export class AddAction implements Action {
    readonly type = ADD_TODO;
    public id: number;
    // Atention text a vérifier
    constructor(public description: string) {
        this.id = Math.random();
    }
}

export class DeleteAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) {}
}

export class UpdateAction implements Action {
    readonly type = UPDATE_TODO;
    constructor(public id: number, public description: string) {}
}
export class ClearCompletedAction implements Action {
    readonly type = CLEAR_COMPLETED_TODO;
}
export type TodoActionType = AddAction | DeleteAction | UpdateAction | ClearCompletedAction;
