import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskChanged = new EventEmitter<Task>();

  onTaskChange(task: Task) {
    this.taskChanged.emit(task);
  }
}
interface Task {
  name: string;
  completed: boolean;
}
