import {Action, createReducer, on} from "@ngrx/store";

import { FollowListState } from "./follow-list.model";
import {
  removeOrderFromFollowList,
  removePatientFromFollowList,
  resetStateFollowList,
  setOrderToFollowList,
  setPatientToFollowList
} from "./follow-list.actions";

export const initialState: FollowListState = {
  followListOfPatients: [],
  followListOfOrders: [],
}

const reducer = createReducer(
  initialState,
  on(resetStateFollowList, state => initialState),
  on(setPatientToFollowList, (state, { patient }) => {
    const followedPatient = state.followListOfPatients
      .find(listPatient => listPatient?.code === patient?.code);
    const patientsInAFollowList = [...state.followListOfPatients];
    if (!followedPatient) {
      patientsInAFollowList.push(patient);
    }

    return {
      ...state,
      followListOfPatients: patientsInAFollowList,
    }
  }),
  on(setOrderToFollowList, (state, { order }) => {
    const followedOrder = state.followListOfOrders
      .find(listOrder => listOrder?.orderNum === order?.orderNum);
    const ordersInAFollowList = [...state.followListOfOrders];
    if (!followedOrder) {
      ordersInAFollowList.push(order);
    }

    return {
      ...state,
      followListOfOrders: ordersInAFollowList,
    }
  }),
  on(removePatientFromFollowList, (state, { patient }) => {
    const followListWithRemovedPatient = state.followListOfPatients
      .filter(listPatient => listPatient?.code !== patient?.code);

    return {
      ...state,
      followListOfPatients: followListWithRemovedPatient,
    }
  }),
  on(removeOrderFromFollowList, (state, { order }) => {
    const followListWithRemovedOrder = state.followListOfOrders
      .filter(listOrder => listOrder?.orderNum !== order?.orderNum);

    return {
      ...state,
      followListOfOrders: followListWithRemovedOrder,
    }
  })
);

export function followListReducer(
  state: FollowListState | undefined,
  action: Action
) {
  return reducer(state, action);
}
