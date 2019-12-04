import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../models/todo.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    toDos: ITodo[] = [
        {
            id: 1,
            title: 'giiurhfiea',
            description: 'giiurhfiea',
            completed: true
        },
        {
            id: 1,
            title: 'giiurhfiea',
            description: 'giiurhfiea',
            completed: false
        },
        {
            id: 1,
            title: 'giiurhfiea',
            description: 'giiurhfiea',
            completed: true
        }
    ];
    b = true;
    constructor() {}
    ngOnInit() {}
}
