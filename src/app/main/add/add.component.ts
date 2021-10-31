import { Output, ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild('headerInput') TaskHeaderInputElement: ElementRef;
  @ViewChild('descriptionInput') TaskDescriptionInputElement: ElementRef;
  @ViewChild('startDateInput') StartDateInputElement: ElementRef;
  @ViewChild('endDateInput') EndDateInputElement: ElementRef;

  @Output() AddTaskEvent = new EventEmitter<{Id: string,TaskHeader: string, Description: string, StartDate: number, EndDate:number}>();

  constructor() {
    
   }

  ngOnInit(): void {
  }


  onSubmit = (form: any) => {
     

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

      this.AddTaskEvent.emit(taskItem)
  }

  OnAddTask = () => {
    var taskItem = {
      Id: (Math.random() * 100).toString(),
      TaskHeader: this.TaskDescriptionInputElement.nativeElement.value,
      Description : this.TaskDescriptionInputElement.nativeElement.value,
      StartDate: this.StartDateInputElement.nativeElement.value,
      EndDate: this.EndDateInputElement.nativeElement.value
    }
    this.AddTaskEvent.emit(taskItem)
  }
}
