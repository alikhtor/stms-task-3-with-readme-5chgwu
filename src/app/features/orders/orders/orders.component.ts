import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import {map, switchMap} from "rxjs/operators";
import { Store } from "@ngrx/store";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { OrdersService } from "../shared/services/orders.service";
import { Order } from "../../../shared/models";
import {setOrderToFollowList} from "../../../core/follow-list/follow-list.actions";
import {selectFollowListOfOrders} from "../../../core/follow-list/follow-list.selectors";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  orders$: Observable<Order[]>;

  constructor(
    private ordersService: OrdersService,
    private store: Store<any>,
  ) {}

  onFetchOrders(): void {
    this.orders$ = this.store.select(selectFollowListOfOrders).pipe(
      switchMap(followedOrders =>
        this.ordersService.fetchOrders().pipe(map(resp => {
          return resp.order.map(order => {
            const followedOrder =
              followedOrders.find(listOrder => listOrder?.orderNum === order?.orderNum);
            if (followedOrder) {
              order.isInFollowedList = true;
            }
            return order
          });
        }))));
  }

  onAddToFollowList(order: Order): void {
    order.isInFollowedList = true;
    this.store.dispatch(setOrderToFollowList({ order }));
  }
}
