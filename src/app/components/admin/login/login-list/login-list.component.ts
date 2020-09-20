import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {
  coms:User[]=[];
  @Input() post: User;
  statusMessage: string;

  constructor(private salatService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.salatService.getUsers().subscribe((coms:User[])=>{this.coms=coms});
  }
  


  remove(com:User) {
    this.salatService.removeUsers(com.id) .subscribe(() => {
      this.router.navigate(['listlogin']);
    })
    }


}
