import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-container',
  templateUrl: './icons-container.component.html',
  styleUrls: ['./icons-container.component.css']
})
export class IconsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  Icons: string[] = [];

  IconsList: { [key: string]: string } = {
    "Angular": "devicon-angularjs-plain",
    "Android": "devicon-android-plain",
    "Adonis": "devicon-adonisjs-original",
  };
}
