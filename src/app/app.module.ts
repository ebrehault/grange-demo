import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrangeRootModule } from '@guillotinaweb/grange';
import { TraversalModule } from 'angular-traversal';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ButtonModule, TextFieldModule, BadgeModule, ExpandModule, DialogModule, ControlsModule, SvgModule } from '@guillotinaweb/pastanaga-angular';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { MovePlayerComponent } from './move-player/move-player.component';
import { TeamContestsComponent } from './team-contests/team-contests.component';

@NgModule({
    declarations: [
        AppComponent,
        TeamListComponent,
        TeamComponent,
        PlayerComponent,
        MovePlayerComponent,
        TeamContestsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GrangeRootModule.forRoot(),
        StoreModule.forRoot({}),
        TraversalModule,
        ButtonModule,
        TextFieldModule,
        BadgeModule,
        ExpandModule,
        DialogModule,
        ControlsModule,
        SvgModule,
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
