import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

declare const myFunction: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any = null;
  
  constructor( private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUserStatus()
      .subscribe((user) => {
        // console.log(user)
        this.user = user
      })
  }



  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
