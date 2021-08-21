import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { AppService } from '../app.Service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  collapsed : boolean = true;
  constructor(private appService:AppService) {
      
   }

  ngOnInit(): void {
  }

  OnAddTask = (selectionType: string) => {  
    this.appService.MenuSelectionEvent.emit(selectionType);
  }

  OnEditTask = (selectionType: string) => {   
    this.appService.MenuSelectionEvent.emit(selectionType);
  }
}
