import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-edit',
  templateUrl: './login-edit.component.html',
  styleUrls: ['./login-edit.component.css']
})
export class LoginEditComponent implements OnInit {

  salat= null;
  message = '';

  constructor(private route: ActivatedRoute,
    private salatService: AuthService,private router: Router) { }


    getTutorial(id) {
      this.salatService.get(id)
        .subscribe(
          data => {
            this.salat = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }




  ngOnInit(): void {

    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }



  updateTutorial() {
    this.salatService.updateUsers(this.salat._id, this.salat)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
