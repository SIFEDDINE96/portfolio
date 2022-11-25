import { Injectable } from "@angular/core";
import { Techno } from "../models/techno.model";

@Injectable({
  providedIn: 'root',
})
export class TechnoService {
  technos: Techno[] = [
    {
      id: 1,
      icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/angular_logo_icon_169595.png',
      title: 'Angular',
      skillId: 1,
    },
    {
      id: 2,
      icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
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
      icon: 'https://miro.medium.com/max/1400/1*j7zQS3KZnvwcXavdyrIffg.png',
      title: 'Spring Boot',
      skillId: 3,
    },
    {
      id: 6,
      icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
      title: 'Node',
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
      icon: 'https://e7.pngegg.com/pngimages/173/36/png-clipart-postgresql-logo-computer-software-database-open-source-s-text-head.png',
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

  getAllTechnos(): Techno[] {
    return this.technos;
  }
  //   getTechnoBySkillId(skillId: number): Techno[] {
  //     const technos = this.technos.filter((techno) => techno.skillId === skillId);

  //     if (!technos) {
  //       throw new Error('Techno not found!');
  //     } else {
  //       return technos;
  //     }
  //   }
}