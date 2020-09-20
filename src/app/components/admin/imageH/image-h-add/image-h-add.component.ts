import { Component, OnInit } from '@angular/core';
import { ImageHallService } from 'src/app/service/image-hall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-h-add',
  templateUrl: './image-h-add.component.html',
  styleUrls: ['./image-h-add.component.css']
})
export class ImageHAddComponent implements OnInit {

  image:string=''


  constructor( private imageHallService: ImageHallService, private router: Router) { }

  ngOnInit(): void {
  }


  uploadImage(event) {
    this.imageHallService.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.image = res.imageUrl
      })
  }



  addPost(): void {
    const data = {
      image: this.image,
      
    }

    this.imageHallService.addImages(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.image = '';
      
      },() => {
        this.router.navigate(['listimages'])
      })
      
  }

}
