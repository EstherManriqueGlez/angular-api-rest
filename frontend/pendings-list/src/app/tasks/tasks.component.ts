import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: any;
  error: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.externalRequest();
  }

  externalRequest(): void {
    this.http.get('http://localhost:8080/api/list')
      .subscribe((response) => {
        this.tasks = response
      },
      (error: any) => {
        this.error = error
      });
  }

  update(): void {
    this.externalRequest();
  }

  createTask(newName: any): void {
    const params = {
      text: newName.value,
    };
    console.log(params.text);

    this.http.post('http://localhost:8080/api/list', params).subscribe(response => {
      this.externalRequest();
      console.log('Task Created', response);
    });
  }
}
