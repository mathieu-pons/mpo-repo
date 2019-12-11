import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ITodo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
    base_url = 'api/todos';
    todos_endpoint = 'todos';
    constructor(private http: HttpClient) {}

    // Get all todo
    getTodos() {
        return this.http.get<ITodo[]>(this.base_url);
    }

    // Create Todo
    createTodo(todo) {
        return this.http.post<ITodo>(this.base_url, todo);
    }

    // Update Todo
    updateTodo(todo) {
        return this.http.put<ITodo>(this.base_url, todo);
    }

    // Delete Todo
    deleteTodo(todoId) {
        return this.http.delete<ITodo>(this.base_url, todoId);
    }
}
