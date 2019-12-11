import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { Store, select } from '@ngrx/store';
import * as fromTodos from '../../store';
import { Observable } from 'rxjs';
import { ITodo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    State$: Observable<any>;
    state: any;
    todos: ITodo[] = [];
    activeTodo: ITodo;

    todo = {
        id: 60000,
        title: 'AAAAAAAAAAAAAAAAAAAAAA',
        description: 'AAAAAAAAAAAAAA',
        completed: false
    };

    constructor(public addTodoModal: MatDialog, private store: Store<fromTodos.State>, private todoService: TodoService) {}

    /**
     * On init
     * @description At the initializtion of the component all todo are recovered via a fake service and are injected into the store
     */
    ngOnInit() {
        this.todoService.getTodos().subscribe(res => {
            this.todos = res;
            this.store.dispatch(new fromTodos.InitAction(this.todos));
        });

        this.State$ = this.store.select('todos');
        this.State$.subscribe(res => {
            if (res) {
                this.state = Object.values(res);
                console.log(this.state);
            }
        });
    }

    /**
     * Open add todo modal
     * @description this function open the add todo modal
     */
    openAddTodoModal(): void {
        this.addTodoModal.open(AddTodoComponent, { width: '250px' });
    }
    /**
     * Open add todo modal
     * @description this function clear all todo completed in the store
     */
    clearCompletedTodo() {
        this.store.dispatch(new fromTodos.ClearCompletedAction());
    }
    /**
     * Open add todo modal
     * @description this function retrieve the todo select for the past at component detail todo
     * @param $event
     */
    recoveredActiveTodo($event) {
        this.activeTodo = $event;
    }
}
