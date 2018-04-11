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
    CommunityComponent
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
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
