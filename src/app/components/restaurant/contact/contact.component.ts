import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  name:string=''
  email:string=''
  comment:string=''
  howmany:string=''
  time:string=''
  phone:string=''
  date:string=''

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

  addCom():void{

    const data={name:this.name,email:this.email,phone:this.phone,howmany:this.howmany,time:this.time,date:this.date,comment:this.comment}

    this.contactService.addContacts(data)
    .subscribe(()=>{this.name='';this.email='';this.phone=''; this.comment='';this.howmany='';this.date='';this.time='';})
  

    

  }

}
