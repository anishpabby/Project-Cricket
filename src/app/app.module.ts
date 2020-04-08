import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CountryListComponent } from './country-list/country-list.component';
import { IndiaComponent } from './india/india.component';
import { PlayersListComponent } from './shared/players-list/players-list.component';
import { PlayerDetails } from './shared/players-list/player details/player-details.component';
import { EditPlayersComponent } from './shared/edit-players/edit-players.component';

const approutes : Routes = [
  { path : 'country', component : CountryListComponent},
  { path : 'country/:cname', component : IndiaComponent, children : [
    { path : ':id', component : PlayerDetails},
    { path : 'new', component : EditPlayersComponent}
  ]},
  { path : 'home', component : HomeComponent},
  { path : '', redirectTo : 'home' , pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    CountryListComponent,
    IndiaComponent,
    PlayersListComponent,
    PlayerDetails,
    EditPlayersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
