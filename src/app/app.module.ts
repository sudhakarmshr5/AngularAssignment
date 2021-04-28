import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AnagramTesterComponent } from './anagram-tester/anagram-tester.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TemperatureComponent } from './temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AnagramTesterComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
