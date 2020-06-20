import { Component } from '@angular/core';
import { Grange } from '@guillotinaweb/grange';

@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
})
export class TeamListComponent {
    newTeam = '';

    constructor(private grange: Grange) { }

    addTeam() {
        this.grange.addInContext({'@type': 'team', title: this.newTeam, contests: {}});
    }

}
