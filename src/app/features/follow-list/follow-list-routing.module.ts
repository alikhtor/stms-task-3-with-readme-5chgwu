import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FollowListComponent } from "./follow-list/follow-list.component";

const routes: Routes = [
  {
    path: "",
    component: FollowListComponent,
    data: { title: "stms.menu.follow-list" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowListRoutingModule { }
