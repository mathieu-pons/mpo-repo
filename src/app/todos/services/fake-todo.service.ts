import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from '../models/todo.model';
export class FakeTodoService implements InMemoryDbService {
    createDb() {
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
            },
            {
                id: 80000,
                title: 'Réunion 3',
                description: 'Réunion 16h',
                completed: true
            },
            {
                id: 90000,
                title: 'Réunion 4',
                description: 'Réunion 16h10',
                completed: true
            },
            {
                id: 100000,
                title: 'Réunion 5',
                description: 'Réunion 16h30',
                completed: true
            },
            {
                id: 110000,
                title: 'Réunion 6',
                description: 'Réunion 16h50',
                completed: true
            }
        ];

        return {
            todos: todos
        };
    }
}
