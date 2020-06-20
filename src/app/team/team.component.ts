import { Component } from '@angular/core';
import { FolderView } from '@guillotinaweb/grange';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent extends FolderView {
    newPlayer = '';

    addPlayer() {
        this.grange.addInContext({
            '@type': 'player',
            title: this.newPlayer
        }).onComplete.subscribe(success => {
            if (success) {
                this.refreshChildren();
                this.newPlayer = '';
            }
        });
    }
}
