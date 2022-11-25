import { Injectable } from "@angular/core";
import { Skill } from "../models/skill.model";

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skills: Skill[] = [
    {
      id: 1,
      icon: 'https://cdn-icons-png.flaticon.com/512/2620/2620735.png',
      title: 'Front-end',
      description: ' description Skill 1',
    },
    {
      id: 2,
      icon: 'https://cdn-icons-png.flaticon.com/512/1158/1158164.png',
      title: 'Styling',
      description: ' description Skill 2',
    },
    {
      id: 3,
      icon: 'https://cdn-icons-png.flaticon.com/512/3668/3668474.png',
      title: 'Back-end',
      description: ' description Skill 3',
    },
    {
      id: 4,
      icon: 'https://cdn-icons-png.flaticon.com/512/149/149206.png',
      title: 'Database',
      description: ' description Skill 4',
    },
  ];

  getAllSkills(): Skill[] {
    return this.skills;
  }

  getSkillById(skillId: number): Skill {
    const skill = this.skills.find((skill) => skill.id === skillId);

    if (!skill) {
      throw new Error('Skill not found!');
    } else {
      return skill;
    }
  }
}