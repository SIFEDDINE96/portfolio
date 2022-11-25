import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills!: Skill[];

  constructor(private skillsService: SkillService ) { }

  ngOnInit(): void {

    this.skills = this.skillsService.getAllSkills();
  }

}
