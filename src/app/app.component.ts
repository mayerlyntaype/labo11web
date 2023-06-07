import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: string = 'all';

  addTask(taskName: string) {
    const task: Task = { name: taskName, completed: false };
    this.tasks.push(task);
    this.applyFilter();
  }

  updateFilter(filter: string) {
    this.filter = filter;
    this.applyFilter();
  }

  applyFilter() {
    if (this.filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (this.filter === 'incomplete') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  onTaskChanged(task: Task) {
    this.applyFilter();
  }
}

interface Task {
  name: string;
  completed: boolean;
}
