import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-r-add',
  templateUrl: './image-r-add.component.html',
  styleUrls: ['./image-r-add.component.css']
})
export class ImageRAddComponent implements OnInit {

  image:string=''


  constructor( private imageService: ImageService, private router: Router) { }

  ngOnInit(): void {
  }


  

  addPost(): void {
    const data = {
      image: this.image,
      
    }

    this.imageService.addImages(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.image = '';
      
      },() => {
        this.router.navigate(['listimages'])
      })
      
  }


  uploadImage(event) {
    this.imageService.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.image = res.imageUrl
      })
  }



}
