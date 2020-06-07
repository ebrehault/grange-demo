import { Component } from '@angular/core';
import { GrangeViews } from '@guillotinaweb/grange';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private views: GrangeViews,
    ) {
        this.views.initialize();
    }
}
