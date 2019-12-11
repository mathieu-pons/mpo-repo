import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { ITodo } from '../models/todo.model';
import { AppModule } from 'src/app/app.module';

describe('TodoService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
    );
    it('should be get all todo', () => {
        let service: TodoService = TestBed.get(TodoService);
        let todos: ITodo[] = [];
        service.getTodos().subscribe(res => {
            todos = res;
            expect(todos[1]).toBe({
                id: 70000,
                title: 'Réunion 2',
                description: 'Réunion 14h',
                completed: false
            });
            expect(todos[0]).toBe({
                id: 60000,
                title: 'Réunion',
                description: 'Réunion 10h',
                completed: false
            });
            expect(todos[5]).toBe({
                id: 110000,
                title: 'Réunion 6',
                description: 'Réunion 16h50',
                completed: true
            });
        });
    });
});
