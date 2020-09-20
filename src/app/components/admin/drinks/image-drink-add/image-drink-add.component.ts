import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/service/drink.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-image-drink-add',
  templateUrl: './image-drink-add.component.html',
  styleUrls: ['./image-drink-add.component.css']
})
export class ImageDrinkAddComponent implements OnInit {

  image:string=''


  constructor( private drinkService: DrinkService, private router: Router) { }

  ngOnInit(): void {
  }


  uploadImage(event) {
    this.drinkService.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.image = res.imageUrl
      })
  }



  addPost(): void {
    const data = {
      image: this.image,
      
    }

    this.drinkService.addDrinkImage(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.image = '';
      
      },() => {
        this.router.navigate(['listdrinks'])
      })
      
  }

}
