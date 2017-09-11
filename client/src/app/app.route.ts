import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './admin/home/home.component';
import { UsersComponent } from './admin/users/users.component';
import { PostsComponent } from './admin/posts/posts.component';

import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin/home',
        pathMatch: 'full',
    },
    {
        path: 'admin/home',
        component: HomeComponent,
        data: {
            title: 'Admin'
        }
    },
    {
        path: 'admin/users',
        component: UsersComponent,
        data: {
            title: 'Users'
        }
    },
    {
        path: 'admin/posts',
        component: PostsComponent,
        data: {
            title: 'Posts'
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: {
            title: 'Account Profile'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Account Registration'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login to System'
        }
    },
    {
        path: 'logout',
        component: LogoutComponent,
        data: {
            title: 'Logout from System'
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {
            title: 'Error 404'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule {
}
