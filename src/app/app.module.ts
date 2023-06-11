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
import { AuthModule } from '@auth0/auth0-angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
    declarations: [AppComponent, StockTableComponent, ShellComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AuthModule.forRoot({
            domain: 'playmarket.us.auth0.com',
            clientId: 'Ms6OBWltXgMXxkqYGK8oTVc2Qfuz4rjZ',
            authorizationParams: {
                redirect_uri: window.location.origin,
            },
        }),
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
