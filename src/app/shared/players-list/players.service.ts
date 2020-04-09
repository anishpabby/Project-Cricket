import { Injectable } from '@angular/core';
import { Players } from './players.model';

@Injectable({providedIn : 'root'})

export class PlayersService {
    
        players : Players []= [
            new Players('India','Sachin Tendulkar','https://c.ndtvimg.com/2020-03/b192o538_sachin-tendulkar-100th-100-twitter_625x300_16_March_20.jpg',
            '1. He has the maximun runs in the entire Indian team till now. 2. He has maximum number of centuries in the world.'
            ),
            new Players('India','Virender Sehwag','https://akm-img-a-in.tosshub.com/indiatoday/images/story/201710/viru-647_102017121125.jpg',
            '1. He is the fastest playing cricketer.'
            )];

        ausplayers : Players[] = [new Players('Australia','Ricky Ponting','https://secure.i.telegraph.co.uk/multimedia/archive/01505/ponting_1505518c.jpg','1.Best Autralian captain till now.')];

        tcode : string;
        constructor(){}
    
    
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
}