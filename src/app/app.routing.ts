import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './components/auth/auth-guard.service';
import {SchedulerContainerComponent} from './components/scheduler-container/scheduler-container.component';
import {NewsComponent} from './components/news/news.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'news', component: NewsComponent},
  {path: 'scheduler', component: SchedulerContainerComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
