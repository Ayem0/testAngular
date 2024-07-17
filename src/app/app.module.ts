import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamComponent } from './components/team/team.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { RenameUserComponent } from './components/rename-user/rename-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamComponent,
    MemberDetailsComponent,
    AddMemberComponent,
    RenameUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
