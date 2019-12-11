import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import * as fromTodos from '../../store';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
    @Input() todos: ITodo[];
    mytodos: any;
    displayedColumns: string[] = ['title', 'description', 'completed'];
    completedArray: boolean[] = [];
    constructor(private store: Store<fromTodos.State>) {}
    @Output() recoveredActiveTodo = new EventEmitter<ITodo>();

    ngOnInit() {}
    ngOnChanges() {
        this.updateCompletedArray();
    }

    /**
     * Update todo completed
     * @description this function update todo in the todo when the user change the chek box completed
     * @param todo ITodo
     * @param index number
     */
    updateTodoCompleted(todo: ITodo, index: number) {
        const newTodo: ITodo = { id: todo.id, title: todo.title, description: todo.description, completed: this.completedArray[index] };
        if (todo) {
            this.store.dispatch(new fromTodos.UpdateAction(newTodo));
        }
    }
    /**
     * Update completed array
     * @description this function update completed Array
     */
    updateCompletedArray() {
        if (this.todos && this.todos[0] !== undefined) {
            this.mytodos = this.todos[0];

            this.completedArray = this.mytodos.map(x => x.completed);
        }
    }
    /**
     * Recovered todo
     * @description this function update completed Array
     */
    recoveredTodo(todo: ITodo) {
        this.recoveredActiveTodo.emit(todo);
    }
}
