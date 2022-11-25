import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Techno } from '../models/techno.model';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill!: Skill;

  technos!: Techno[];

  constructor(private technoService: TechnoService) { }

  ngOnInit(): void {
    this.technos = this.technoService.getAllTechnos();
  }

}
