import { User as Auth0User } from '@auth0/auth0-spa-js'

export interface UserState {
    userDetails: Auth0User
}

export const initialState: UserState = {
    userDetails: {},
}

// example Feature State
// {
//     users {
//         userDetails {
//             email"example@playmarket.com"
//             email_verifiedfalse
//             name"example@playmarket.com"
//             nickname"example"
//             picture"https://s.gravatar.com/avatar/4cdab982284ee546405d6adbfa5df175?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fex.png"
//             sub"auth0|647ba0937f0a52162cfa2e57"
//             updated_at"2023-06-12T01:26:01.304Z"
//         }
//     }
// }
