import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  baseIcon : string = "devicon-angularjs-plain";
  colored : string = "";

  UpdateColor(value: boolean)
  {    
    if (value) 
    {
      this.colored = "colored";
    }
    else
    {
      this.colored = "";
    }
  }
}
