import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() selectedTask: {Id: string, TaskHeader: string, Description:string, StartDate: number, EndDate:number};
  @Output() EditTaskEvent = new EventEmitter<{Id: string, headerInput: string, startDateInput: string, StartDate: number, EndDateInput:number}>();
  
  headerInput:string;
  descriptionInput: string;
  EndDateInput: number;
  startDateInput: number;

  constructor() { }

  ngOnInit(): void {

    this.headerInput = this.selectedTask.TaskHeader;
    this.descriptionInput = this.selectedTask.Description;
    this.startDateInput =  this.selectedTask.StartDate;
    this.EndDateInput =  this.selectedTask.EndDate;   
  }

  onEdit = (form: any) => {
      
      if(form.status === "INVALID" || form.touched === false)
      {
        alert("You have not entered details");
        return;
      }

      const {headerInput, descriptionInput, startDateInput, EndDateInput, selectedType} = form.value;
      var taskItem = {
        Id: (Math.random() * 100).toString(),
        TaskHeader: headerInput,
        Description : descriptionInput,
        StartDate: startDateInput,
        EndDate: EndDateInput,
        selectedType: selectedType
      };
  }

}
