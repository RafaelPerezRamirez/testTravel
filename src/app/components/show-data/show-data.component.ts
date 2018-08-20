import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  data:any;
  constructor(private _router:Router, private activated:ActivatedRoute) {
      this.activated.params.subscribe( params => {
          this.data = params;
      })
  }
  ngOnInit() {
  }

}
