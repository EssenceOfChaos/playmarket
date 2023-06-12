import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StockTableComponent } from './stock-table/stock-table.component'
import { ShellComponent } from './shell/shell.component'
// Angular Material Module
import { MaterialModule } from './material.module'
// Auth0 Module
import { AuthModule } from '@auth0/auth0-angular'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
/* Feature Modules */
import { UserModule } from './user/user.module'
import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from 'src/app/user/state'

@NgModule({
    declarations: [AppComponent, StockTableComponent, ShellComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        UserModule,
        AuthModule.forRoot({
            domain: 'playmarket.us.auth0.com',
            clientId: '8Eu2xPkYDsvXSmbCGjyH7BZ7HZzWlRgi',
            authorizationParams: {
                redirect_uri: window.location.origin,
            },
        }),
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([UserEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
