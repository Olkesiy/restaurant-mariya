import { Component, OnInit } from '@angular/core';
import { SecondsCoursesService } from 'src/app/service/seconds-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seconds-courses-add',
  templateUrl: './seconds-courses-add.component.html',
  styleUrls: ['./seconds-courses-add.component.css']
})
export class SecondsCoursesAddComponent implements OnInit {

  name:string=''
  GrPc:string=''
  price:string=''

  constructor(private secondsCoursesService: SecondsCoursesService, private router: Router) { }

  ngOnInit(): void {
  }

  addPost(): void {
    const data = {
      name: this.name,
      GrPc: this.GrPc,
      price: this.price
    }

    this.secondsCoursesService.addSecondsCourses(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.name = '';
        this.GrPc = '';
        this.price = '';
      },() => {
        this.router.navigate(['listsecondscourses'])
      })
      
  }
}
