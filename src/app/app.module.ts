import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

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
import {MatSidenavModule} from '@angular/material';
import {CommunityComponent} from './components/community/community.component';
import {SchedulerService} from './components/scheduler-container/scheduler.service';
import {ZoomableDirective, DraggableDirective} from './components/administration/d3/directives/';
import {D3Service} from './components/administration/d3/';
import {GraphComponent} from './components/administration/visuals/graph/graph.component';
import {LinkVisualComponent, NodeVisualComponent} from './components/administration/visuals/shared';
import { AdministrationComponent } from './components/administration/administration.component';
import { AdministrationDrawerComponent } from './components/administration/administration-drawer/administration-drawer.component';
import { ProfileComponent } from './components/profile/profile.component';

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
    AdministrationComponent,
    AdministrationDrawerComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    AuthService,
    SchedulerService,
    D3Service,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
