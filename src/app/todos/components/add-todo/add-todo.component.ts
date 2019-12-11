import { Component, OnInit, Inject } from '@angular/core';
import { ITodo } from 'src/app/todos/models/todo.model';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromTodos from './../../store';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
    todo: ITodo;
    todoForm: FormGroup;
    constructor(public dialogRef: MatDialogRef<AddTodoComponent>, private store: Store<fromTodos.State>) {}

    /**
     * On init
     * @description At the initializtion of the component the todoForm is initialized
     */
    ngOnInit() {
        this.todoForm = new FormGroup({
            title: new FormControl('', [Validators.required, Validators.minLength(1)]),
            description: new FormControl('')
        });
    }

    /**
     * Add todo
     * @description This function add a todo in the store
     */
    addTodo() {
        this.store.dispatch(new fromTodos.AddAction(this.controlsTitle.value, this.controlsDescription.value));
        this.close();
    }

    /**
     * Close
     * @description This function close the modal add todo
     */
    close() {
        this.dialogRef.close();
    }

    get controlsTitle() {
        return this.todoForm.controls.title;
    }
    get controlsDescription() {
        return this.todoForm.controls.description;
    }
}
