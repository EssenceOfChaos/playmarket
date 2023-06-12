import { NgModule } from '@angular/core'

/* NgRx */
import { StoreModule } from '@ngrx/store'
import { userReducer } from './state/user.reducer'

@NgModule({
    imports: [StoreModule.forFeature('users', userReducer)],
    declarations: [],
})
export class UserModule {}
