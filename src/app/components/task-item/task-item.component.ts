import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  faTimes=faTimes;

  @Input()
  task!: Task;
  @Output() OnDeleteTask: EventEmitter<Task>=new EventEmitter() 

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.OnDeleteTask.emit(task)
  }

}
