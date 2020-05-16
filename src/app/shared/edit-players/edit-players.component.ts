import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayersService } from '../players-list/players.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.css']
})
export class EditPlayersComponent implements OnInit {

  constructor(private router : Router,private route : ActivatedRoute,private playerservice : PlayersService) { }

  playerForm : FormGroup ;
  team : string;
  editMode = false;
  id : number;

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.editMode = params['id'] != null ;  
    this.id = +params['id'];
    });
    this.team = this.playerservice.getTeam();
    this.formInit();
  }

  onAddingPlayers(){
    if(this.editMode){
    this.playerservice.editPlayer(this.id,this.team, this.playerForm.value);  
    this.router.navigate(['../'],{relativeTo : this.route});
    }
    else{
    this.playerservice.addPlayer(this.playerForm.value,this.team);
    this.router.navigate(['../'],{relativeTo : this.route});
    }
}

  onReturn(){
    this.router.navigate(['../'],{relativeTo : this.route});
  }

  private formInit() {
    let playerName : string = '';
    let playerPic : string = '';
    let playerRecords : string = '';

    if(this.editMode){
      const player11 = this.playerservice.getPlayer(this.id);
      playerName = player11.name;
      playerPic = player11.pic;
      playerRecords = player11.records;
    }

    this.playerForm = new FormGroup({
      'name' : new FormControl(playerName, Validators.required),
      'pic' : new FormControl(playerPic,Validators.required),
      'records' : new FormControl(playerRecords,Validators.required)
    });
  }
}
