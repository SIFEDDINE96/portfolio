import { Injectable } from "@angular/core";
import { Skill } from "../models/skill.model";
import {Techno} from "../models/techno.model";

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

  technos: Techno[] = [
    {
      id: 1,
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png',
      title: 'Angular',
      skillId: 1,
    },
    {
      id: 2,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'React',
      skillId: 1,
    },
    {
      id: 3,
      icon: 'https://ih1.redbubble.net/image.830028208.7543/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      title: 'Angular Material',
      skillId: 2,
    },
    {
      id: 4,
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
      title: 'Sass',
      skillId: 2,
    },
    {
      id: 5,
      icon: 'https://liveit-media.imgix.net/media/event/my-first-event-1461/logo-spvnih.png?ixlib=python-2.3.0&w=600',
      title: 'Spring',
      skillId: 3,
    },
    {
      id: 6,
      icon: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
      title: 'Node JS',
      skillId: 3,
    },
    {
      id: 7,
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png',
      title: 'MySQL',
      skillId: 4,
    },
    {
      id: 8,
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png',
      title: 'PostreSQL',
      skillId: 4,
    },
    {
      id: 9,
      icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969170.png',
      title: 'Oracle',
      skillId: 4,
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


  getTechnosBySkillId(skillId: number): Techno[] {
    const technos = this.technos.filter((techno) => techno.skillId === skillId);

    if (!technos) {
      throw new Error('Technos not found!');
    } else {
      return technos;
    }
  }
}
