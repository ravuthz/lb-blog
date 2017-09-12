import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule, PaginationComponent } from 'ngx-bootstrap/pagination';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        UsersComponent,
        PostsComponent
    ]
})
export class AdminModule { }
