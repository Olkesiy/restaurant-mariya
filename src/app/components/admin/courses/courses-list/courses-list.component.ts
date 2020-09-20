import { Component, OnInit, Input } from '@angular/core';
import { Courses } from 'src/app/models/courses';
import { CoursesService } from 'src/app/service/courses.service';
import { Router } from '@angular/router';
import { ImageCourses } from 'src/app/models/image-courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  coms:Courses[]=[];
  coms1:ImageCourses[]=[];
  @Input() post: Courses;
  statusMessage: string;

  constructor(private coursesService:CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((coms:Courses[])=>{this.coms=coms});
    this.coursesService.getCoursesImage().subscribe((coms1:ImageCourses[])=>{this.coms1=coms1});
  }
  


  remove(com:Courses) {
    this.coursesService.removeCourses(com.id) .subscribe(() => {
      this.router.navigate(['listcourses']);
    })
    }


    removeI(com:ImageCourses) {
      this.coursesService.removeCourses(com.id) .subscribe(() => {
        this.router.navigate(['listcourses']);
      })
      }

}
