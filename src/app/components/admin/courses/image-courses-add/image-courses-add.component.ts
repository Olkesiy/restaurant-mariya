import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/service/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-courses-add',
  templateUrl: './image-courses-add.component.html',
  styleUrls: ['./image-courses-add.component.css']
})
export class ImageCoursesAddComponent implements OnInit {

  image:string=''


  constructor( private service: CoursesService, private router: Router) { }

  ngOnInit(): void {
  }


  uploadImage(event) {
    this.service.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.image = res.imageUrl
      })
  }



  addPost(): void {
    const data = {
      image: this.image,
      
    }

    this.service.addCoursesImage(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.image = '';
      
      },() => {
        this.router.navigate(['listdrinks'])
      })
      
  }
}
