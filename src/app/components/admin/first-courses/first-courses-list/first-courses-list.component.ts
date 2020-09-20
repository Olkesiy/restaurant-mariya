import { Component, OnInit, Input } from '@angular/core';
import { FirstCourses } from 'src/app/models/first-courses';
import { SecondsCoursesService } from 'src/app/service/seconds-courses.service';
import { Router } from '@angular/router';
import { FirstCoursesService } from 'src/app/service/first-courses.service';
import { ImageFirst } from 'src/app/models/image-first';

@Component({
  selector: 'app-first-courses-list',
  templateUrl: './first-courses-list.component.html',
  styleUrls: ['./first-courses-list.component.css']
})
export class FirstCoursesListComponent implements OnInit {

  coms:FirstCourses[]=[];
  coms1:ImageFirst[]=[];
  @Input() post: FirstCourses;
  statusMessage: string;

  constructor(private firstCoursesService:FirstCoursesService, private router: Router) { }

  ngOnInit(): void {
    this.firstCoursesService.getFirstCourses().subscribe((coms:FirstCourses[])=>{this.coms=coms});
    this.firstCoursesService.getCoursesImage().subscribe((coms:ImageFirst[])=>{this.coms1=coms});
  }
  


  remove(com:FirstCourses) {
    this.firstCoursesService.removeFirstCourses(com.id) .subscribe(() => {
      this.router.navigate(['listfirstcourses']);
    })
    }

    
  removeI(com:ImageFirst) {
    this.firstCoursesService.removeFirstCourses(com.id) .subscribe(() => {
      this.router.navigate(['listfirstcourses']);
    })
    }

}
