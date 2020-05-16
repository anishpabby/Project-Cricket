import { Injectable } from "@angular/core";
import { PlayersService } from './players-list/players.service';
import { HttpClient } from '@angular/common/http';
import { map,tap } from 'rxjs/operators';
import { Players } from './players-list/players.model';

@Injectable({providedIn : 'root'})

export class DataService {

    constructor(private playerservice : PlayersService,private http : HttpClient){}

    fetchPlayers(team : string){

      switch(team)
      {
        case 'India' :
            {
    /*   return this.http.get<Players[]>('https://cricket-1046b.firebaseio.com/players.json').pipe(
                  map(players => {
                    return players.map(play => {
                      return {...play};
                    });
                  }),
                  tap(players => {
                    this.playerservice.setPlayers(players);
                    console.log(players);
                  })
                ).subscribe(response => {
                  console.log(response);
                }); */
          return this.http.get<Players[]>('https://cricket-1046b.firebaseio.com/players.json').subscribe(
            players => {
              this.playerservice.setPlayers(players);
            });
          
            }
          case 'Australia' :
            {
              return this.http.get<Players[]>('https://cricket-1046b.firebaseio.com/ausplayers.json').subscribe(
            players => {
              this.playerservice.setAusPlayers(players);
            });
            }

          case 'England' :
              {
                return this.http.get<Players[]>('https://cricket-1046b.firebaseio.com/engplayers.json').subscribe(
              players => {
                this.playerservice.setEngPlayers(players);
              });
              }
          case 'NewZealand' :
                {
                  return this.http.get<Players[]>('https://cricket-1046b.firebaseio.com/nzplayers.json').subscribe(
                players => {
                  this.playerservice.setNzPlayers(players);
                });
                }
        }
  }
}