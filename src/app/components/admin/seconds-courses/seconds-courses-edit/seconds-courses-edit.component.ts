import { Component, OnInit } from '@angular/core';
import { SecondsCoursesService } from 'src/app/service/seconds-courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seconds-courses-edit',
  templateUrl: './seconds-courses-edit.component.html',
  styleUrls: ['./seconds-courses-edit.component.css']
})
export class SecondsCoursesEditComponent implements OnInit {

   
  salat= null;
  message = '';

  constructor(private route: ActivatedRoute,
    private service: SecondsCoursesService,private router: Router) { }


    getTutorial(id) {
      this.service.getSeconds(id)
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
    this.service.updateSecondsCourses(this.salat._id, this.salat)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          this.router.navigate(['listsecondscourses']);
        },
        error => {
          console.log(error);
        });
  }

}
