import { Order, Patient } from "../../shared/models";

export interface FollowListState {
  followListOfPatients: Patient[];
  followListOfOrders: Order[];
}
