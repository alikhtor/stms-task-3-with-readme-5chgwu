import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable} from "rxjs";

import { Order, Patient } from "../../../shared/models";
import { selectFollowListOfOrders, selectFollowListOfPatients } from "../../../core/follow-list/follow-list.selectors";
import {
  removeOrderFromFollowList,
  removePatientFromFollowList,
  resetStateFollowList
} from "../../../core/follow-list/follow-list.actions";

@Component({
  selector: 'st-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.scss', '../../orders/orders/orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowListComponent implements OnInit, OnDestroy {
  orders$: Observable<Order[]>;
  patients$: Observable<Patient[]>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.orders$ = this.store.select(selectFollowListOfOrders);
    this.patients$ = this.store.select(selectFollowListOfPatients);
  }

  removeItem(item: Patient | Order, type: 'p' | 'o') {
    if (type === 'p') {
      this.store.dispatch(removePatientFromFollowList({patient: item}));
    } else {
      this.store.dispatch(removeOrderFromFollowList({ order: item }));
    }
  }

  ngOnDestroy() {
    // this.store.dispatch(resetStateFollowList());
  }
}
