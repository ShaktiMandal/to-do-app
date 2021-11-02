import { Component, OnInit, OnChanges, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() selectedTask: {Id: string, TaskHeader: string, Description:string, StartDate: number, EndDate:number};
  @Output() EditTaskEvent = new EventEmitter<{Id: string, TaskHeader: string, Description:string, StartDate: number, EndDate:number}>();
  
  headerInput:string;
  descriptionInput: string;
  EndDateInput: number;
  startDateInput: number;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {

    this.headerInput = this.selectedTask.TaskHeader;
    this.descriptionInput = this.selectedTask.Description;
    this.startDateInput =  this.selectedTask.StartDate;
    this.EndDateInput =  this.selectedTask.EndDate;   
  }

  onEdit = (form: any) => {
      
      if(form.status === "INVALID" || form.touched === false)
      {
        alert("You have not edited details correctly");
        return;
      }

      const {headerInput, descriptionInput, startDateInput, EndDateInput, selectedType} = form.value;    

      this.EditTaskEvent.emit({
        Id: this.selectedTask.Id,
        TaskHeader: headerInput,
        Description : descriptionInput,
        StartDate: startDateInput,
        EndDate: EndDateInput
      });

      form.reset();
  }

}
