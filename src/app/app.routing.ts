import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './components/auth/auth-guard.service';
import {SchedulerContainerComponent} from './components/scheduler-container/scheduler-container.component';
import {NewsComponent} from './components/news/news.component';
import {CommunityComponent} from './components/community/community.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ExercisesComponent} from './components/exercises/exercises.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {GraphDisplayComponent} from './components/dashboard/graph-display/graph-display.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'graph', component: GraphDisplayComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'news', component: NewsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'scheduler', component: SchedulerContainerComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
