import { Component, OnInit } from '@angular/core';
import { SecondsCoursesService } from 'src/app/service/seconds-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-seconds-add',
  templateUrl: './image-seconds-add.component.html',
  styleUrls: ['./image-seconds-add.component.css']
})
export class ImageSecondsAddComponent implements OnInit {

  image:string=''


  constructor( private service: SecondsCoursesService, private router: Router) { }

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

    this.service.addSecondsImage(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.image = '';
      
      },() => {
        this.router.navigate(['listseconds'])
      })
      
  }

}
