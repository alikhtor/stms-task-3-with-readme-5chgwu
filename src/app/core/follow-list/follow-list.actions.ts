import { createAction, props } from '@ngrx/store';
import { Order, Patient } from "../../shared/models";

export const actionKey = '[Follow List]';

export const resetStateFollowList = createAction(
  `${actionKey} Reset State Follow List`,
);

export const setPatientToFollowList = createAction(
  `${actionKey} Set Patient To Follow List`,
  props<{ patient: Patient }>(),
);

export const setOrderToFollowList = createAction(
  `${actionKey} Set Order To Follow List`,
  props<{ order: Order }>(),
);

export const removePatientFromFollowList = createAction(
  `${actionKey} Set Patient From Follow List`,
  props<{ patient: Patient }>(),
);

export const removeOrderFromFollowList = createAction(
  `${actionKey} Set Order From Follow List`,
  props<{ order: Order }>(),
);
