import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamComponent } from './components/team/team.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "team", component: TeamComponent },
  { path: "team/:id", component: MemberDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
