import { Component, OnInit } from '@angular/core';
import { Resource } from '@guillotinaweb/grange-core';
import { ViewView } from '@guillotinaweb/grange';
import { map } from 'rxjs/operators';

interface Player extends Resource {
    rank: number;
}

@Component({
    selector: 'app-player',
    templateUrl: 'player.component.html',
})
export class PlayerComponent extends ViewView implements OnInit {
    title = '';
    rank = 0;
    player = this.context.pipe(map(res => res as Player));

    ngOnInit() {
        this.player.subscribe(context => {
            this.title = context.title;
            this.rank = context.rank;
        });
    }

    save() {
        this.grange.updateContext({
            title: this.title,
            rank: this.rank,
        });
    }

    delete() {
        this.grange.deleteContext().onComplete.subscribe(success => {
            if (success) {
                this.grange.traverser.traverse('..');
            }
        });
    }
}
