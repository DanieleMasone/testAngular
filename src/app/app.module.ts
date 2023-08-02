import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavComponent } from './components/nav/nav.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { API_CONFIG } from './models/environment.api';
import { RoutingModuleModule } from './routes/routing-module.module';
import { AuthService } from './services/auth-service/auth.service';
import { UserService } from './services/user-service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    NavComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModuleModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    UserService,
    AuthService,
    {
      provide: API_CONFIG,
      useValue: environment.api
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
