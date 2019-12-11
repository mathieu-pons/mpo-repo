import { AddAction, InitAction, UpdateAction, ClearCompletedAction } from './actions';
import { ITodo } from '../models/todo.model';

describe('Create todo', () => {
    it('should create an todo without description', () => {
        const action = new AddAction('TestTile');
        expect(action.title).toEqual('TestTile');
        expect(action.id).not.toBeNull();
        expect(action.description).toBeUndefined();
        expect(action.type).toEqual('[TODO] add');
    });
    it('should create an todo without description', () => {
        const action = new AddAction('TestTile', 'TestDescription');
        expect(action.title).toEqual('TestTile');
        expect(action.id).not.toBeNull();
        expect(action.description).toEqual('TestDescription');
        expect(action.type).toEqual('[TODO] add');
    });
});

describe('Init todos', () => {
    it('should init an todos', () => {
        let todos: ITodo[] = [
            {
                id: 60000,
                title: 'Réunion',
                description: 'Réunion 10h',
                completed: false
            },
            {
                id: 70000,
                title: 'Réunion 2',
                description: 'Réunion 14h',
                completed: false
            }
        ];
        const action = new InitAction(todos);
        expect(action.todos).toEqual(todos);
    });
});

describe('Update todo', () => {
    it('should update an todo', () => {
        let todo: ITodo = {
            id: 60000,
            title: 'Réunion',
            description: 'Réunion 10h',
            completed: false
        };
        const action = new UpdateAction(todo);
        expect(action.todo).toEqual(todo);
    });
});
