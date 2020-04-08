import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../players.service';
import { Players } from '../players.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector : 'app-player-det',
    templateUrl : './player-details.component.html'
})

export class PlayerDetails implements OnInit{

    constructor(private playerservice : PlayersService, private route : ActivatedRoute, private router : Router){}
    
    player : Players;
    id : number;
    
    ngOnInit(){
    this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.player = this.playerservice.getPlayer(this.id);
       });
    }

}