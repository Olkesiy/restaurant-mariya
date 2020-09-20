import { Component, OnInit } from '@angular/core';
import { FirstCoursesService } from 'src/app/service/first-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-first-add',
  templateUrl: './image-first-add.component.html',
  styleUrls: ['./image-first-add.component.css']
})
export class ImageFirstAddComponent implements OnInit {

  image:string=''


  constructor( private service: FirstCoursesService, private router: Router) { }

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
        this.router.navigate(['listfirst'])
      })
      
  }
}
