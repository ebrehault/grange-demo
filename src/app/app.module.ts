import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GrangeRootModule } from '@guillotinaweb/grange';
import { TraversalModule } from 'angular-traversal';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ButtonModule, TextFieldModule, BadgeModule } from '@guillotinaweb/pastanaga-angular';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';

@NgModule({
    declarations: [
        AppComponent,
        TeamListComponent,
        TeamComponent,
    ],
    imports: [
        BrowserModule,
        GrangeRootModule.forRoot(),
        StoreModule.forRoot({}),
        TraversalModule,
        ButtonModule,
        TextFieldModule,
        BadgeModule,
    ],
    providers: [
        {
            provide: 'CONFIGURATION',
            useValue: {
                BACKEND_URL: 'http://127.0.0.1:8081/db/ping-pong',
                CLIENT_TIMEOUT: 5000,
                LOGO: 'assets/logo.svg',
            },
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
