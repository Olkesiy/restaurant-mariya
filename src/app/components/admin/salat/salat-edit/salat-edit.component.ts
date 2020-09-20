import { Component, OnInit } from '@angular/core';
import { Salat } from 'src/app/models/salat';
import { ActivatedRoute, Router } from '@angular/router';
import { SalatService } from 'src/app/service/salat.service';

@Component({
  selector: 'app-salat-edit',
  templateUrl: './salat-edit.component.html',
  styleUrls: ['./salat-edit.component.css']
})
export class SalatEditComponent implements OnInit {



  salat= null;
  message = '';

  constructor(private route: ActivatedRoute,
    private salatService: SalatService,private router: Router) { }


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

  updatePublished(status) {
    const data = {
      name: this.salat.name,
      GrPc: this.salat.GrPc,
      price: this.salat.price,
      published: status
    };

    this.salatService.updateSalats(this.salat.id, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }


  updateTutorial() {
    this.salatService.updateSalats(this.salat._id, this.salat)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          this.router.navigate(['listsalat']);
        },
        error => {
          console.log(error);
        });
  }


}
