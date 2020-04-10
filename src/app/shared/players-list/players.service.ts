import { Injectable } from '@angular/core';
import { Players } from './players.model';
import { Subject } from 'rxjs';

@Injectable({providedIn : 'root'})

export class PlayersService {
    
        players : Players []= [
            new Players('Sachin Tendulkar','https://c.ndtvimg.com/2020-03/b192o538_sachin-tendulkar-100th-100-twitter_625x300_16_March_20.jpg',
            'He has the maximun runs in the entire Indian team till now. He has maximum number of centuries in the world.'
            ),
            new Players('Virender Sehwag','https://akm-img-a-in.tosshub.com/indiatoday/images/story/201710/viru-647_102017121125.jpg',
            'He is the fastest playing cricketer.'
            )];

        ausplayers : Players[] = [new Players('Ricky Ponting','https://secure.i.telegraph.co.uk/multimedia/archive/01505/ponting_1505518c.jpg','Best Autralian captain till now.')];

        tcode : string;
        teamChanged = new Subject<Players[]>();
        teamAusChanged = new Subject<Players[]>();
        constructor(){}
    
      getTeam(){
        return this.tcode ;
      }    

      getPlayers(teamcode : string){
          this.tcode = teamcode ;
          switch(teamcode){
              case 'India' :
                return this.players.slice();
              case 'Australia' :
                return this.ausplayers.slice();
            }
        }

      getPlayer(id:number){
        switch(this.tcode){
            case 'India' :
              return this.players[id];
            case 'Australia' :
              return this.ausplayers[id];
          }
      }

      addPlayer(player : Players,code : string){
        switch(code){
          case 'India' : {
            this.players.push(player);
            this.teamChanged.next(this.players.slice());
            break;
            }
          case 'Australia' : {
            this.ausplayers.push(player);
            this.teamAusChanged.next(this.ausplayers.slice());
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
        }
      }
}