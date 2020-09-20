import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  name:string=''
  GrPc:string=''
  price:string=''

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
  }

  addPost(): void {
    const data = {
      name: this.name,
      GrPc: this.GrPc,
      price: this.price
    }

    this.coursesService.addCourses(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.name = '';
        this.GrPc = '';
        this.price = '';
      },() => {
        this.router.navigate(['listcourses'])
      })
      
  }

}
