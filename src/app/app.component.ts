import { Component, Injectable, Input } from '@angular/core';
import { AppService } from './app.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TODO-APP';
  selectionType: string = "";

  constructor(){}

  // OnMenuSeclection = (eventData: {selectionType: string}) => {   
  //   this.appService.MenuSelectionEvent.emit(this.selectionType);
  // }
}
