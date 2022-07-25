import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigle-task',
  templateUrl: './sigle-task.component.html',
  styleUrls: ['./sigle-task.component.scss']
})
export class SigleTaskComponent implements OnInit {

  @Input()
  taskInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
