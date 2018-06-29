import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   

  emailModel = {
    From: "",
    Message: ""
  }

  isNotMobile = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if(window.screen.width < 700){
      this.isNotMobile = false;
    }
  }

}
