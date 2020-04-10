import { Component, OnInit, Output, OnDestroy} from '@angular/core';
import { Players } from '../shared/players-list/players.model';
import { PlayersService } from '../shared/players-list/players.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit,OnDestroy {

  constructor(private playersservice : PlayersService,private route : ActivatedRoute,private router:Router) { }

 teamcode : string ;
  players : Players[];
  subs : Subscription ;
  subs2 : Subscription ;

  ngOnInit(){

    this.route.params.subscribe(params => {
      this.teamcode = params['cname'];
      });

   this.subs = this.playersservice.teamChanged.subscribe((players1:Players[]) => {
      this.players = players1;
    });

   this.subs2 = this.playersservice.teamAusChanged.subscribe((players1:Players[]) => {
      this.players = players1; 
    });

    this.players = this.playersservice.getPlayers(this.teamcode);
 } 

onAddPlayers(){
this.router.navigate(['new'],{relativeTo : this.route});
}
onBack(){
  this.router.navigate(['../'],{relativeTo : this.route});
}
ngOnDestroy(){
  this.subs.unsubscribe();
  this.subs2.unsubscribe();
}
}

