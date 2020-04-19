import { Injectable } from '@angular/core';
import { Players } from './players.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn : 'root'})

export class PlayersService {

      constructor(private http : HttpClient){}
    
     /*   players : Players []= [
            new Players('Sachin Tendulkar','https://c.ndtvimg.com/2020-03/b192o538_sachin-tendulkar-100th-100-twitter_625x300_16_March_20.jpg',
            'He has the maximun runs in the entire Indian team till now. He has maximum number of centuries in the world.'
            ),
            new Players('Virender Sehwag','https://akm-img-a-in.tosshub.com/indiatoday/images/story/201710/viru-647_102017121125.jpg',
            'He is the fastest playing cricketer.'
            )];
      */
      players : Players[] = [];
      ausplayers : Players[] = [];
      engplayers : Players[] = [];
      nzplayers : Players[] = [];
     //   ausplayers : Players[] = [new Players('Ricky Ponting','https://secure.i.telegraph.co.uk/multimedia/archive/01505/ponting_1505518c.jpg','Best Autralian captain till now.')];

        tcode : string;
        teamChanged = new Subject<Players[]>();
        teamAusChanged = new Subject<Players[]>();
        teamEngChanged = new Subject<Players[]>();
        teamNzChanged = new Subject<Players[]>();
    
      getTeam(){
        return this.tcode ;
      }  
      
      setPlayers(players : Players[]){
        this.players = players;
        console.log(this.players);
        this.teamChanged.next(this.players.slice());
      }

      setAusPlayers(players : Players[]){
        this.ausplayers = players;
        this.teamChanged.next(this.ausplayers.slice());
      }

      setEngPlayers(players : Players[]){
        this.engplayers = players;
        this.teamEngChanged.next(this.engplayers.slice());
      }

      setNzPlayers(players : Players[]){
        this.nzplayers = players;
        this.teamNzChanged.next(this.nzplayers.slice());
      }

      getPlayers(teamcode : string){
          this.tcode = teamcode ;
          switch(teamcode){
              case 'India' :
                return this.players.slice(); 
              case 'Australia' :
                return this.ausplayers.slice();
              case 'England' :
                return this.engplayers.slice();
              case 'NewZealand' :
                return this.nzplayers.slice();
            }
        }

      getPlayer(id:number){
        switch(this.tcode){
            case 'India' :
              return this.players[id];
            case 'Australia' :
              return this.ausplayers[id];
            case 'England' :
              return this.engplayers[id];
            case 'NewZealand' :
              return this.nzplayers[id];
          }
      }

      addPlayer(player : Players,code : string){
        switch(code){
          case 'India' : {
            this.players.push(player);
            const p = this.players;
            this.http.put<Players[]>('https://cricket-1046b.firebaseio.com/players.json',p).subscribe((data) => {
              console.log(data);
            });
            this.teamChanged.next(this.players.slice());
            break;
            }
          case 'Australia' : {
            this.ausplayers.push(player);
            this.http.put<Players[]>('https://cricket-1046b.firebaseio.com/ausplayers.json',this.ausplayers).subscribe((data) => {
              console.log(data);
            });
            this.teamAusChanged.next(this.ausplayers.slice());
            break;
            }
          case 'England' : {
              this.engplayers.push(player);
              this.http.put<Players[]>('https://cricket-1046b.firebaseio.com/engplayers.json',this.engplayers).subscribe((data) => {
                console.log(data);
              });
              this.teamEngChanged.next(this.engplayers.slice());
              break;
              }
          case 'NewZealand' : {
                this.nzplayers.push(player);
                this.http.put<Players[]>('https://cricket-1046b.firebaseio.com/nzplayers.json',this.nzplayers).subscribe((data) => {
                  console.log(data);
                });
                this.teamNzChanged.next(this.nzplayers.slice());
                break;
                }
        }
      }

      editPlayer(id:number,team : string,player : Players){
        switch(team){
          case 'India' : {
            this.players[id] = player ;
            this.teamChanged.next(this.players.slice());
            break;
            }
          case 'Australia' : {
            this.ausplayers[id] = player ;
            this.teamAusChanged.next(this.ausplayers.slice());
            break;
            }
          case 'England' : {
              this.engplayers[id] = player ;
              this.teamEngChanged.next(this.engplayers.slice());
              break;
              }
          case 'NewZealand' : {
                this.nzplayers[id] = player ;
                this.teamNzChanged.next(this.nzplayers.slice());
                break;
                }
        }
      }

      deletePlayer(id : number){
        switch(this.tcode){
          case 'India' : {
            this.players.splice(id,1);
            this.teamChanged.next(this.players.slice());
            break;
            }
          case 'Australia' : {
            this.ausplayers.splice(id,1);
            this.teamAusChanged.next(this.ausplayers.slice());
            break;
            }
          case 'England' : {
              this.engplayers.splice(id,1);
              this.teamEngChanged.next(this.engplayers.slice());
              break;
              }
          case 'NewZealand' : {
                this.nzplayers.splice(id,1);
                this.teamNzChanged.next(this.nzplayers.slice());
                break;
                }
        }
      }
}