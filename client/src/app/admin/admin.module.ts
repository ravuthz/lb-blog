import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HomeComponent,
        UsersComponent,
        PostsComponent
    ]
})
export class AdminModule { }
