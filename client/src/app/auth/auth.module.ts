import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoginComponent,
        LogoutComponent,
        ProfileComponent,
        RegisterComponent
    ]
})
export class AuthModule { }
