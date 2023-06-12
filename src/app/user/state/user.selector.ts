import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UserState } from '../user'

export const selectUser = createFeatureSelector<UserState>('user')

export const selectUserDetails = createSelector(
    selectUser,
    (state: UserState) => state.userDetails
)

export const selectIsLoggedIn = createSelector(
    selectUserDetails,
    (userDetails) => !!userDetails
)
