import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
 MatButtonModule,  MatTableModule, MatTabsModule, MatCheckboxModule, MatToolbarModule,  MatFormFieldModule, MatInputModule, MatSidenavModule, MatListModule } from '@angular/material';

import { todos } from './reducer';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,   
    MatButtonModule,    
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatToolbarModule,    
    MatFormFieldModule,
    MatInputModule,    
    MatSidenavModule,
    MatListModule,
    StoreModule.forRoot({todos})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
