import { Component, Input, OnInit } from '@angular/core';
import { Techno } from '../models/techno.model';

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.scss']
})
export class TechnoComponent implements OnInit {
@Input() techno!: Techno;

  constructor() { }

  ngOnInit(): void {
  }

}
