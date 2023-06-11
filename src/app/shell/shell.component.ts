import { Component, inject, OnInit, Inject } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { AuthService } from '@auth0/auth0-angular'
import { DOCUMENT } from '@angular/common'

/** The ShellComponent consists of the toolbar at the top of the screen along with the side-navigation menu */
@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.css'],
})
export class ShellComponent implements OnInit {
    profileJson: string = ''
    private breakpointObserver = inject(BreakpointObserver)

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map((result) => result.matches),
            shareReplay()
        )
    constructor(
        public auth: AuthService,
        @Inject(DOCUMENT) private doc: Document
    ) {}
    ngOnInit() {
        console.log('[Shell Component] - initialized')
    }

    loginWithRedirect() {
        this.auth.loginWithRedirect()
        this.getProfileDetails()
    }

    logout() {
        this.auth.logout({
            logoutParams: { returnTo: this.doc.location.origin },
        })
    }
    getProfileDetails() {
        this.auth.user$.subscribe(
            (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
        )
    }
}
