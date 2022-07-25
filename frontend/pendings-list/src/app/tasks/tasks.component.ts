import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.externalRequest();
  }

  externalRequest(): void {
    this.http.get('http://localhost:8080/api/list')
    .subscribe((response) => {
      this.tasks = response;
      // console.log(response);
    });
  }
}
