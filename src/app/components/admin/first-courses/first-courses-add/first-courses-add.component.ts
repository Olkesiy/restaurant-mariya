import { Component, OnInit } from '@angular/core';
import { FirstCoursesService } from 'src/app/service/first-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-courses-add',
  templateUrl: './first-courses-add.component.html',
  styleUrls: ['./first-courses-add.component.css']
})
export class FirstCoursesAddComponent implements OnInit {

  name:string=''
  GrPc:string=''
  price:string=''

  constructor(private firstCoursesService: FirstCoursesService, private router: Router) { }

  ngOnInit(): void {
  }

  addPost(): void {
    const data = {
      name: this.name,
      GrPc: this.GrPc,
      price: this.price
    }

    this.firstCoursesService.addFirstCourses(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.name = '';
        this.GrPc = '';
        this.price = '';
      },() => {
        this.router.navigate(['listfirstcourses'])
      })
      
  }

}
