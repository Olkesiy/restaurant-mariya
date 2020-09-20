import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/card.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';
import { mustContainSymbol, passwordMatch } from '../register/register.validators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  registerForm: FormGroup;


  // firstname:string=''
  // lastname:string=''
  // surname:string=''
  // howmany:string=''
  // email:string=''
  // phone:string=''
  // become:string=''
  // bithday:string=''
  // passport:string=''
  // city:string=''



  constructor(
    private router: Router,
    private builder: FormBuilder,
    private cardService: CardService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.builder.group({
      firstname: ['', { validators: Validators.required }],
      lastname: ['', { validators: Validators.required }],
      surname: ['', { validators: Validators.required }],
      phone: ['', { validators: Validators.required }],
      email: ['', { validators: [Validators.required, Validators.email] }],
      become: ['', { validators: Validators.required }],
      bithday: ['', { validators: Validators.required }],
      passport: ['', { validators: Validators.required }],
      city: ['', { validators: Validators.required }],
     
     })
  }

  register() {


    this.cardService.addCard(this.registerForm.value)
      .subscribe(() => {
        this.messageService.setMsg({ msg: 'Registration Successful! Please Login', type: 'success' })
        this.router.navigate(['/thanks'])
      }, () => { })
  }

}
