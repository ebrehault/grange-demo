import { Component } from '@angular/core';
import { Grange } from '@guillotinaweb/grange';
import { Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { Resource } from '@guillotinaweb/grange-core';

@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
})
export class TeamListComponent {
    newTeam = '';
    teams: Resource[];

    constructor(private grange: Grange) {
        this.loadTeams().subscribe(teams => this.teams = teams);
    }

    addTeam() {
        this.grange.addInContext({'@type': 'team', title: this.newTeam, contests: {}}).onComplete.pipe(
            concatMap(() => this.loadTeams()),
        ).subscribe(teams => {
            this.teams = teams;
            this.newTeam = '';
        });
    }

    loadTeams(): Observable<Resource[]> {
        return this.grange.core.resource.items('/').pipe(
            map(res => res.items
                .filter(item => item['@type'] === 'team')
            )
        );
    }
}
