import { Component, OnInit } from '@angular/core';
import { SalatService } from 'src/app/service/salat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-salat-add',
  templateUrl: './image-salat-add.component.html',
  styleUrls: ['./image-salat-add.component.css']
})
export class ImageSalatAddComponent implements OnInit {

  image:string=''


  constructor( private service: SalatService, private router: Router) { }

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

    this.service.addSalatsImage(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.image = '';
      
      },() => {
        this.router.navigate(['listsalats'])
      })
      
  }
}
