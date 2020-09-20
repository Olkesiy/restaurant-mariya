import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/service/drink.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drinks-edit',
  templateUrl: './drinks-edit.component.html',
  styleUrls: ['./drinks-edit.component.css']
})
export class DrinksEditComponent implements OnInit {

  
  salat= null;
  message = '';

  constructor(private route: ActivatedRoute,
    private service: DrinkService,private router: Router) { }


    getTutorial(id) {
      this.service.get(id)
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
    this.service.updateDrinks(this.salat._id, this.salat)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          this.router.navigate(['listdrinks']);
        },
        error => {
          console.log(error);
        });
  }

}
