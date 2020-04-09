import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from './players.service';
import { Players } from './players.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  constructor(private playersservice : PlayersService, private router : Router,private route : ActivatedRoute) { }

  @Input() playerss : Players;
  @Input() index : number;
  
  ngOnInit() {
    }

    onPlayerClick(){
      this.router.navigate([this.index],{relativeTo : this.route});
    }
  }

