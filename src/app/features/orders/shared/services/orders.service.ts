import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { apiUrlV2 } from "../../../../../environments/environment";
import { OrdersResponseModel } from "../models/orders-response.model";

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) {}

  fetchOrders(): Observable<OrdersResponseModel> {
    return this.http.get<OrdersResponseModel>(`${apiUrlV2}/79fb05cb`);
  }

}
