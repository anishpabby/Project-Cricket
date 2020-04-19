import { Component, OnInit, Output, OnDestroy} from '@angular/core';
import { Players } from '../shared/players-list/players.model';
import { PlayersService } from '../shared/players-list/players.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data-store.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit,OnDestroy {

  constructor(private playersservice : PlayersService,private route : ActivatedRoute,private router:Router,
              private dataservice : DataService) { }

 teamcode : string ;
  players : Players[];
  subs : Subscription ;
  subs2 : Subscription ;
  subs3 : Subscription ;
  subs4 : Subscription ;
  alength = true ;

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

    this.subs3 = this.playersservice.teamEngChanged.subscribe((players1:Players[]) => {
      this.players = players1; 
    });

    this.subs4 = this.playersservice.teamNzChanged.subscribe((players1:Players[]) => {
      this.players = players1; 
    });
    this.players = this.playersservice.getPlayers(this.teamcode);
    this.alength = this.players.length === 0 ? true : false;
 } 

onFetchPlayers(){
  this.dataservice.fetchPlayers(this.teamcode);
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
  this.subs3.unsubscribe();
  this.subs4.unsubscribe();
}
}

