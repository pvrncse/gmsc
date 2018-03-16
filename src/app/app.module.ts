import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { MatStepperModule } from '@angular/material/stepper';
import{ ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { NodemodulesService } from './nodemodules.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path:'',
        redirectTo:'login',
        pathMatch: 'full' 
      }
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    MatStepperModule,
    ReactiveFormsModule

  ],
  providers: [NodemodulesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
