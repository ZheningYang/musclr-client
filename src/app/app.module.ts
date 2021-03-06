import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/navigation/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideNavigationListComponent} from './components/navigation/side-navigation-list/side-navigation-list.component';
import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './components/auth/auth.service';
import {AuthInterceptor} from './components/auth/auth.interceptor';
import {SchedulerComponent} from './components/scheduler-container/scheduler/scheduler.component';
import {SchedulerContainerComponent} from './components/scheduler-container/scheduler-container.component';
import {SchedulerDrawerComponent} from './components/scheduler-container/scheduler-drawer/scheduler-drawer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FooterComponent} from './components/navigation/footer/footer.component';
import {NewsComponent} from './components/news/news.component';
import {MatInputModule, MatRadioModule, MatSidenavModule} from '@angular/material';
import {CommunityComponent} from './components/community/community.component';
import {SchedulerService} from './components/scheduler-container/scheduler.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ExercisesComponent} from './components/exercises/exercises.component';
import {SafePipe} from './components/exercises/safe.pipe';
import {DraggableDirective, ZoomableDirective} from './components/dashboard/graph-display/d3/directives';
import {ExerciseService} from './components/exercises/exercise.service';
import {Neo4jService} from './components/dashboard/graph-display/neo4j.service';
import {D3Service} from './components/dashboard/graph-display/d3';
import {GraphComponent} from './components/dashboard/graph-display/visuals/graph/graph.component';
import {LinkVisualComponent, NodeVisualComponent} from './components/dashboard/graph-display/visuals/shared';
import {GraphDisplayComponent} from './components/dashboard/graph-display/graph-display.component';
import {GraphDrawerComponent} from './components/dashboard/graph-display/graph-drawer/graph-drawer.component';
import { FriendItemComponent } from './components/scheduler-container/friend-item/friend-item.component';
import { UsersGraphDetailsComponent } from './components/dashboard/graph-display/graph-drawer/graph-details/users-graph-details/users-graph-details.component';
import { EventsGraphDetailsComponent } from './components/dashboard/graph-display/graph-drawer/graph-details/events-graph-details/events-graph-details.component';
import { TownsGraphDetailsComponent } from './components/dashboard/graph-display/graph-drawer/graph-details/towns-graph-details/towns-graph-details.component';
import { GymsGraphDetailsComponent } from './components/dashboard/graph-display/graph-drawer/graph-details/gyms-graph-details/gyms-graph-details.component';
import { UsersGraphDetailsService } from './components/dashboard/graph-display/graph-drawer/graph-details/users-graph-details/users-graph-details.service';
import { WorkoutCarouselComponent } from './components/workout-carousel/workout-carousel.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { UserCarouselComponent } from './components/user-carousel/user-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavigationListComponent,
    LoginComponent,
    HomeComponent,
    SchedulerComponent,
    SchedulerContainerComponent,
    SchedulerDrawerComponent,
    FooterComponent,
    NewsComponent,
    CommunityComponent,
    DraggableDirective,
    ZoomableDirective,
    GraphComponent,
    LinkVisualComponent,
    NodeVisualComponent,
    GraphDisplayComponent,
    GraphDrawerComponent,
    ProfileComponent,
    ExercisesComponent,
    ProfileComponent,
    DashboardComponent,
    FriendItemComponent,
    SafePipe,
    UsersGraphDetailsComponent,
    EventsGraphDetailsComponent,
    TownsGraphDetailsComponent,
    GymsGraphDetailsComponent,
    WorkoutCarouselComponent,
    WorkoutComponent,
    UserCarouselComponent
  ],
  imports: [
    NguCarouselModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatInputModule,
    MatRadioModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    AuthService,
    SchedulerService,
    D3Service,
    Neo4jService,
    ExerciseService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    UsersGraphDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
