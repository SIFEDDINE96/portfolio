import { Component, OnInit } from '@angular/core';
import {ContactService} from "../services/contact.service";
import {Contact} from "../models/contact.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts!: Contact[];

  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getAllContact();
  }

}
