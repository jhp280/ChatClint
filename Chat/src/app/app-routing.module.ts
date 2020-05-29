import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {path: '', children: []},
  {path: 'index/:action', component: LoginComponent},
  {path: 'chat', component: MessageComponent},
  {path: '**', redirectTo: 'index/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
