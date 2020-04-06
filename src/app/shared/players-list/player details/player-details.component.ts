import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Players } from '../players.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'app-player-det',
    templateUrl : './player-details.component.html'
})

export class PlayerDetails implements OnInit{

    constructor(private playerservice : PlayersService, private router : ActivatedRoute){}
    
    player : Players;
    id : number;
    
    ngOnInit(){
    this.router.params.subscribe(params => {
    this.id = +params['id'];
    this.player = this.playerservice.getPlayer(this.id);
       });
    }
}