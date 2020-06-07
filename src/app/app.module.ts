import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GrangeRootModule } from '@guillotinaweb/grange';
import { TraversalModule } from 'angular-traversal';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GrangeRootModule.forRoot(),
        StoreModule.forRoot({}),
        TraversalModule,
    ],
    providers: [
        {
            provide: 'CONFIGURATION',
            useValue: {
                BACKEND_URL: 'http://127.0.0.1:8081/db/site',
                CLIENT_TIMEOUT: 5000,
            },
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
