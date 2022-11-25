import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Techno } from '../models/techno.model';
import {SkillService} from "../services/skill.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill!: Skill;

  technos!: Techno[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.technos = this.skillService.getTechnosBySkillId(this.skill.id);
  }

}
