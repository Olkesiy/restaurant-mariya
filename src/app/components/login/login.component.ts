import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  
  }

  login() {
    this.authService.login(this.model)
      .subscribe(() => {
        this.router.navigate(['listadmin']);
      }, (err) => {
        this.messageService.setMsg({ msg: 'Invalid Credentials.', type: 'danger' })
      })
   
  }
}
