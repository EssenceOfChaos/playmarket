import { createAction, props } from '@ngrx/store'
import { User as Auth0User } from '@auth0/auth0-spa-js'

export const allShellActions = {
    loginFlowInitiated: createAction('[Shell] Login Flow Initiated'),
    logoutFlowInitiated: createAction('[Shell] Logout Flow Initiated'),
}

export const userChangedFromAuth0SDK = createAction(
    '[Auth0 SDK] User Changed',
    props<{ userDetails: Auth0User }>()
)
