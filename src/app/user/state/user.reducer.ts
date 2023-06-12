import { createReducer, on, Action } from '@ngrx/store'
import * as UserActions from './user.actions'

// State for this feature (User)
import { User as Auth0User } from '@auth0/auth0-spa-js'

export interface UserState {
    userDetails: Auth0User
}

export const initialState: UserState = {
    userDetails: {},
}

export const userReducer = createReducer(
    initialState,
    on(UserActions.userChangedFromAuth0SDK, (state, { userDetails }) => ({
        ...state,
        userDetails: userDetails as Auth0User,
    }))
)

export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action)
}
