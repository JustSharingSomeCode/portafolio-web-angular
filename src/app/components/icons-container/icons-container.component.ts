import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-container',
  templateUrl: './icons-container.component.html',
  styleUrls: ['./icons-container.component.css']
})
export class IconsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(this.IconSize === "small")
    {
      this.gapSize = "gap-small";
    }
  }

  @Input()
  ShowText : boolean = false;

  @Input()
  IconSize : string = "big";

  gapSize : string = "gap-big";

  @Input()
  Icons: string[] = [];

  IconsList: { [key: string]: string } = {
    "Csharp": "devicon-csharp-plain",
    "Java": "devicon-java-plain",
    "Python": "devicon-python-plain",
    "SqlServer": "devicon-microsoftsqlserver-plain",
    "MySql": "devicon-mysql-plain",
    "PostgreSql": "devicon-postgresql-plain",
    "HTML": "devicon-html5-plain",
    "Css": "devicon-css3-plain",
    "Bootstrap": "devicon-bootstrap-plain",
    "Angular": "devicon-angularjs-plain",
    ".Net Core" : "devicon-dotnetcore-plain",
    "Unity" : "devicon-unity-original",
    "OpenTk" : "devicon-opengl-plain",
    "Tomcat" : "devicon-tomcat-line"
  };
}
