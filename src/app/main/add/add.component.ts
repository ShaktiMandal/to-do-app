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
