import { Injectable } from '@angular/core';
import { Players } from './players.model';

@Injectable({providedIn : 'root'})

export class PlayersService {
    
        players : Players []= [
            new Players('India','Sachin Tendulkar','https://lh3.googleusercontent.com/proxy/t9LIlW4bKXQPWZUXvPvioOJCD79CGVRsRXwnhl9MZqKlVq3IJBjGgCctTEm9uIGyR7UE9FNbziuBeIi7NOvFDzu-4xuvWhED3cxlozXjgz2nRR7E3i3fQvfhCHE0_g',
            '1. He has the maximun runs in the entire Indian team till now. 2. He has maximum number of centuries in the world.'
            ),
            new Players('India','Virender Sehwag','https://akm-img-a-in.tosshub.com/indiatoday/images/story/201710/viru-647_102017121125.jpg',
            '1. He is the fastest playing cricketer.'
            )];

      getPlayers(){
          return this.players.slice();
      }

      getPlayer(id:number){
          return this.players[id];
      }
}