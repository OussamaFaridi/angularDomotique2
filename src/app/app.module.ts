import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';
import { ControlComponent } from './control/control.component';
import { ErrorComponent } from './error/error.component';




const appRoutes =[
  { 
    path:'appareils', 
    canActivate: [AuthGuard],
  component:AppareilViewComponent
  },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponentComponent },
  { 
    path:'auth', 
  component:AuthComponent
  },
  { 
    path:'', 
  component:AppareilViewComponent
  },
  {
  path:'appareils/:id', 
  canActivate: [AuthGuard],
  component:SingleAppareilComponent
  },
  {
    path:'not-found', 
    component:FourOhFourComponent
    },
    {
      path:'**', 
      redirectTo:'/not-found'
      },
  
]

@NgModule({
  declarations: [
    AppComponent,
  
    AppareilComponent,
  
    AuthComponent,
  
    AppareilViewComponent,
  
    SingleAppareilComponent,
  
    FourOhFourComponent,
  
    EditAppareilComponentComponent,
  
    ControlComponent,
  
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
