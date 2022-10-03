import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (this.size === "small")
    {
      this.iconSize = "icon-small";
      this.containerSize = "container-small";
    }
  }

  @Input()
  baseIcon : string = "devicon-angularjs-plain";

  @Input()
  size : string = "big";

  iconSize : string = "icon-big";
  containerSize : string = "container-big";
}
