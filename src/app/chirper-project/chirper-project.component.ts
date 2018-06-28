import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chirper-project',
  templateUrl: './chirper-project.component.html',
  styleUrls: ['./chirper-project.component.css']
})
export class ChirperProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
}

}
