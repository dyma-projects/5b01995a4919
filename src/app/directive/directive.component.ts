import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  public titleDirective: string = 'Mon Composant';
  public defaultIn: string = 'from component';
  public doubleSens: string = 'Default 0';
  public status: boolean = true;
  public texts: string[] = ['un', 'deux', 'trois'];
  constructor() {}

  ngOnInit() {}
  inverseStatus() {
    this.status = !this.status;
  }
}
