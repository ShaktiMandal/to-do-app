import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {

  @Input() TaskItem: {Id: string, TaskHeader: string, Description: string, StartDate: number, EndDate:number};
  @Output() SelectedItemEvent = new EventEmitter<{selectedTaskId: string, selectionType: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  OnDelete = (selectedTaskId: string, selectionType: string) => {
    this.SelectedItemEvent.emit({selectedTaskId, selectionType});
  }

  OnEditTask = (selectedTaskId: string, selectionType: string) => {
    this.SelectedItemEvent.emit({selectedTaskId, selectionType});
  }

}
