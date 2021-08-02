import { createSelector } from '@ngrx/store';

import { FollowListState } from './follow-list.model';
import { selectFollowListState } from '../core.state';

export const selectFollowList = createSelector(
  selectFollowListState,
  (state: FollowListState) => state
);

export const selectFollowListOfOrders = createSelector(
  selectFollowList,
  state => state.followListOfOrders
);

export const selectFollowListOfPatients = createSelector(
  selectFollowList,
  state => state.followListOfPatients
);
