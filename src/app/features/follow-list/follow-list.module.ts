import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowListRoutingModule } from './follow-list-routing.module';
import { FollowListComponent } from './follow-list/follow-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [FollowListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FollowListRoutingModule,
  ]
})
export class FollowListModule { }
