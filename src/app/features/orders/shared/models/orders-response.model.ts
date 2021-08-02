import { ResponseModel, Order } from "../../../../shared/models";

export interface OrdersResponseModel extends ResponseModel {
  order: Order[];
}
