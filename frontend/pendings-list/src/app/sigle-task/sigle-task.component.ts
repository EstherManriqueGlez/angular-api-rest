import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sigle-task',
  templateUrl: './sigle-task.component.html',
  styleUrls: ['./sigle-task.component.scss']
})
export class SigleTaskComponent implements OnInit {

  showData: boolean = false;

  @Input()
  taskInfo: any;

  @Output()
  changeTask: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  deleteRecord(taskInfo: any): void {
    this.http.delete('http://localhost:8080/api/list/' + taskInfo._id)
      .subscribe((response) => {
        this.changeTask.emit();
      });
  }

  activateEdition(): void {
    this.showData = true;
    console.log('Editado');
  }

  taskEdit(taskInfo: any, newItem: any): void {
    const params = {
      text: newItem.value,
    };
    console.log(params.text);


    this.http.put('http://localhost:8080/api/list/' + taskInfo._id, params).subscribe((response) => {
      this.changeTask.emit();
    });
  }
}
