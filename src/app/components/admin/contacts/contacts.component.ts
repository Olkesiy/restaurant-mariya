import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {



  coms:Contact[]=[];
  @Input() post: Contact;
  statusMessage: string;

  constructor(private contactService:ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((coms:Contact[])=>{this.coms=coms});
  
  }

  remove(com:Contact) {
    this.contactService.removeContacts(com.id) .subscribe(() => {
      this.router.navigate(['listContacts']);
    })
    }


}
