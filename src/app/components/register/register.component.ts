import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatch, mustContainSymbol } from './register.validators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', { validators: Validators.required }],
      email: ['', { validators: [Validators.required, Validators.email] }],
      username: ['', { validators: Validators.required }],
      password: ['', { validators: [Validators.required, Validators.minLength(6), mustContainSymbol] }],
      confirmPassword: ''
    }, {
        validators: passwordMatch
      })
  }

  register() {
    this.authService.register(this.registerForm.value)
      .subscribe(() => {
        this.messageService.setMsg({ msg: 'Registration Successful! Please Login', type: 'success' })
        this.router.navigate(['/listlogin'])
      }, () => { })
  }
}
