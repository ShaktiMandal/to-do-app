import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.Service';
type ArrayType = Array<{Id: string, TaskHeader: string, Description: string, StartDate: number, EndDate:number}>;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  
})
export class MainComponent implements OnInit {
   
  selectionType: string;
  selectedTask:   {Id: string, TaskHeader: string, Description: string, StartDate: number, EndDate:number};

  listOfTasks: ArrayType = [{
    Id: (Math.random() * 100).toString(),
    TaskHeader: "Breakfast", 
    Description: "Do Breakfast everyday",
    StartDate: new Date().getDate(),
    EndDate: new Date().getDate()
}]
 
  constructor(private appService:AppService) { 

    this.appService.MenuSelectionEvent.subscribe((selectedMenu: string) =>{
      this.selectionType = selectedMenu;
    });   

    this.listOfTasks.push({
        Id: (Math.random() * 100).toString(),
        TaskHeader: "Exercise", 
        Description: "Do exercise everyday",
        StartDate: new Date().getDate(),
        EndDate: new Date().getDate()
    });
  }

  ngOnInit(): void {
   
  } 
  
  OnAddTask = (taskItem: {Id: string, TaskHeader: string, Description: string, StartDate: number, EndDate:number}) =>{
      this.listOfTasks.push(taskItem);      
  }

  OnEdit = (taskItem: {Id: string, TaskHeader: string, Description: string, StartDate: number, EndDate:number}) => {
    this.listOfTasks.find(item => {
      if(item.Id === taskItem.Id)
      {      
        item.TaskHeader = taskItem.TaskHeader, 
        item.Description = taskItem.Description,
        item.StartDate = taskItem.StartDate,
        item.EndDate = taskItem.EndDate
      }
    });
  }

  OnEditEvent = (selectedId:{selectedTaskId: string, selectionType: string}) =>
  {
    this.selectionType = selectedId.selectionType;
    this.selectedTask = this.listOfTasks.find(item => item.Id === selectedId.selectedTaskId);
  }
}
