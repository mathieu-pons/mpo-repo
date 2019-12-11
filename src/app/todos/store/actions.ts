import { Action } from '@ngrx/store';
import { ITodo } from '../models/todo.model';

export const ADD_TODO = '[TODO] add';

export const INIT_TODO = '[TODO] init';
export const DELETE_TODO = '[TODO] delete';
export const UPDATE_TODO = '[TODO] update';
export const CLEAR_COMPLETED_TODO = '[TODO] clearCompleted';

export class AddAction implements Action {
    readonly type = ADD_TODO;
    public id: number;
    constructor(public title: string, public description?: string) {
        this.id = Math.floor(Math.random() * 2000);
    }
}
export class InitAction implements Action {
    readonly type = INIT_TODO;
    constructor(public todos: ITodo[]) {}
}

export class DeleteAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) {}
}

export class UpdateAction implements Action {
    readonly type = UPDATE_TODO;
    constructor(public todo: ITodo) {}
}
export class ClearCompletedAction implements Action {
    readonly type = CLEAR_COMPLETED_TODO;
}
export type TodoActionType = AddAction | DeleteAction | UpdateAction | ClearCompletedAction | InitAction;
