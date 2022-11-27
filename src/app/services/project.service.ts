import {Injectable} from "@angular/core";
import {Project} from "../models/project.model";

@Injectable({
  providedIn:"root",
})
export class ProjectService{
  projects : Project[] = [
    {
      id: 1,
      title: 'filmRec',
      description: ' It is a web application that facilitates the user to choose a movie' +
                   ' and recommends a movie according to his interest and many other criteria ',
      link: 'This is the project link'
    },
    {
      id: 2,
      title: 'MyShop',
      description: ' It is a E-commerce website',
      link: 'This is the project link'
    },
  ];

  getAllProjects(): Project[] {
    return this.projects;
  }
}
