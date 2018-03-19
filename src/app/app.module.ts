import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {HeaderComponent} from './components/navigation/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideNavigationListComponent} from './components/navigation/side-navigation-list/side-navigation-list.component';
import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './components/auth/auth.service';
import {AuthInterceptor} from './components/auth/auth.interceptor';
import {SchedulerComponent} from './components/scheduler-container/scheduler/scheduler.component';
import {SchedulerContainerComponent} from './components/scheduler-container/scheduler-container.component';
import { SchedulerDrawerComponent } from './components/scheduler-container/scheduler-drawer/scheduler-drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavigationListComponent,
    LoginComponent,
    HomeComponent,
    SchedulerComponent,
    SchedulerContainerComponent,
    SchedulerDrawerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
