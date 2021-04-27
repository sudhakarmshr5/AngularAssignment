import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagramTesterComponent } from './anagram-tester/anagram-tester.component';
import { TemperatureComponent } from './temperature/temperature.component';
import {UserComponent} from './user/user.component'


const routes: Routes = [{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: 'user', component: UserComponent },
{ path: 'anagram', component: AnagramTesterComponent },
{ path: 'temperature', component: TemperatureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
