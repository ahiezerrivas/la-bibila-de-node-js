import { Component, OnInit, Input } from '@angular/core';
import { Technology } from 'src/app/models/technology.model";

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css']
})
export class TechnologyCardComponent implements OnInit {
  @Input () technology: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
