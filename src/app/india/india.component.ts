import { Component, OnInit} from '@angular/core';
import { Players } from '../shared/players-list/players.model';
import { PlayersService } from '../shared/players-list/players.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  constructor(private playersservice : PlayersService) { }
  
  players : Players[];
  ngOnInit() {
    this.players = this.playersservice.getPlayers();
  }
}
