import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-angular-project',
  templateUrl: './angular-project.component.html',
  styleUrls: ['./angular-project.component.css']
})
export class AngularProjectComponent implements OnInit {

  constructor(private router: Router) { }

ngOnInit(){

}

ngAfterViewChecked() {
    window.scrollTo(0, 0);
}

}
