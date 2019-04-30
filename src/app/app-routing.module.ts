import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { StudyComponent } from './study/study.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "study/:id", component: StudyComponent },
  { path: "team/:id", component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
