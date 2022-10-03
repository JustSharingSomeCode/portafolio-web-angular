import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
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
