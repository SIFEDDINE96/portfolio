import {Injectable} from "@angular/core";
import {Contact} from "../models/contact.model";

@Injectable({
  providedIn:'root'
})
export class ContactService{
  contacts: Contact[] = [
    {
      id: 1,
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      contactName: 'LinkedIn',
      contactLink:'',
    },
    {
      id: 2,
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      contactName: 'Github',
      contactLink:'',
    },
    {
      id: 3,
      icon: 'https://cdn-icons-png.flaticon.com/512/281/281769.png',
      contactName: 'E-mail',
      contactLink:'',
    },

  ];

  getAllContact(){
    return this.contacts;
  }
}
