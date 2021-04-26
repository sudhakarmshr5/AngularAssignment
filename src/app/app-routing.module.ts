import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagramTesterComponent } from './anagram-tester/anagram-tester.component';
import {UserComponent} from './user/user.component'


const routes: Routes = [{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: 'user', component: UserComponent },
{ path: 'anagram', component: AnagramTesterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
