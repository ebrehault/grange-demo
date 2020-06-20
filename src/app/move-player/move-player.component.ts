import { Component, ViewChild } from '@angular/core';
import { IDialog, DialogComponent, ControlModel } from '@guillotinaweb/pastanaga-angular';
import { Grange } from '@guillotinaweb/grange';
import { Observable } from 'rxjs';
import { map, take, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-move-player',
  templateUrl: './move-player.component.html',
})
export class MovePlayerComponent implements IDialog {
    @ViewChild(DialogComponent, { static: true }) dialog: DialogComponent | undefined;
    player = this.grange.getContext();
    newTeam = '';
    teams: Observable<ControlModel[]> = this.grange.core.resource.items('/').pipe(
        map(res => res.items
            .filter(item => item['@type'] === 'team')
            .map(team => new ControlModel({
                id: team['@id'],
                value: team['@id'],
                label: team.title,
            }))
        )
    );

    constructor(private grange: Grange) { }

    move() {
        this.player.pipe(take(1)).pipe(
            concatMap(player => this.grange.core.resource.moveTo(player['@id'], this.newTeam))
        ).subscribe(() => this.dialog.close(this.newTeam));
    }
}
