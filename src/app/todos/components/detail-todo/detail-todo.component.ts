import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../../models/todo.model';

@Component({
    selector: 'app-detail-todo',
    templateUrl: './detail-todo.component.html',
    styleUrls: ['./detail-todo.component.scss']
})
export class DetailTodoComponent implements OnInit {
    @Input() todoActive: ITodo;

    constructor() {}

    ngOnInit() {}
}
