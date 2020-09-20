import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstCoursesService } from 'src/app/service/first-courses.service';

@Component({
  selector: 'app-first-courses-edit',
  templateUrl: './first-courses-edit.component.html',
  styleUrls: ['./first-courses-edit.component.css']
})
export class FirstCoursesEditComponent implements OnInit {

  
  salat= null;
  message = '';

  constructor(private route: ActivatedRoute,
    private firstCoursesService: FirstCoursesService,private router: Router) { }


    getTutorial(id) {
      this.firstCoursesService.get(id)
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
    this.firstCoursesService.updateFirstCourses(this.salat._id, this.salat)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          this.router.navigate(['listfirstcourses']);
        },
        error => {
          console.log(error);
        });
  }


}
