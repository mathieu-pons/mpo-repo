//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Matérial
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './todos/components/home/home.component';
import { ListComponent } from './todos/components/list/list.component';
import { AddTodoComponent } from './todos/components/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Store
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { DetailTodoComponent } from './todos/components/detail-todo/detail-todo.component';

//Services
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeTodoService } from './todos/services/fake-todo.service';
import { TodoService } from './todos/services/todo.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, HomeComponent, ListComponent, AddTodoComponent, DetailTodoComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatButtonModule,
        HttpClientInMemoryWebApiModule.forRoot(FakeTodoService),
        StoreModule.forRoot(fromApp.reducers, {
            metaReducers: fromApp.metaReducers
        }),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
    ],
    providers: [TodoService],
    bootstrap: [AppComponent],
    entryComponents: [AddTodoComponent]
})
export class AppModule {}
