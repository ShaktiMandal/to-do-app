import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

type ArrayType = Array<{Id: string,TaskHeader: string, Description: string, StartDate: number, EndDate:number}>;
@Component({
  selector: 'app-taskitems',
  templateUrl: './taskitems.component.html',
  styleUrls: ['./taskitems.component.css']
})
export class TaskitemsComponent implements OnInit {

  @Output() TaskEditEvent = new EventEmitter<{selectedTaskId: string, selectionType: string}>();
  @Input() TaskItems: ArrayType;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  OnSelectionEvent = (selectedId:{selectedTaskId: string, selectionType: string}) => {

    
    if(selectedId.selectionType === "EditTask")
    {
        this.TaskEditEvent.emit(selectedId)
    }
    else
    {
      if(this.TaskItems)
      {
          var selectedIndex = this.TaskItems.findIndex(x=> x.Id === selectedId.selectedTaskId);
          if(selectedIndex !== -1)
          {
            this.TaskItems.splice(selectedIndex, 1)
          }
      }
    }
  }
}
