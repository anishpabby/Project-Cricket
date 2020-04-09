import { Component, OnInit, Output} from '@angular/core';
import { Players } from '../shared/players-list/players.model';
import { PlayersService } from '../shared/players-list/players.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  constructor(private playersservice : PlayersService,private route : ActivatedRoute,private router:Router) { }

 teamcode : string ;
  players : Players[];

  ngOnInit(){
    this.route.params.subscribe(params => {
    this.teamcode = params['cname'];
    this.players = this.playersservice.getPlayers(this.teamcode);
    })
} 
onAddPlayers(){
this.router.navigate(['new'],{relativeTo : this.route});
}
onBack(){
  this.router.navigate(['../'],{relativeTo : this.route});
}

}

