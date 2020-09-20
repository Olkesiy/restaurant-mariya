import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { ImageHallService } from 'src/app/service/image-hall.service';
import { ImageHall } from 'src/app/models/image-hall';
import { FunService } from 'src/app/service/fun.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  registerForm: FormGroup;

  images:ImageHall[]=[];
  slideIndex = 0;

  name:string=''
  email:string=''
  comment:string=''
  howmany:string=''
  fun:string=''
  phone:string=''
  date:string=''


  constructor(private imageHallService: ImageHallService,private funService:FunService) {}
  ngOnInit(): void {
   this.loadImages();
  }


  addCom():void{

    const data={name:this.name,email:this.email,phone:this.phone,howmany:this.howmany,fun:this.fun,date:this.date,comment:this.comment}

    this.funService.addFun(data)
    .subscribe(()=>{this.name='';this.email='';this.phone=''; this.comment='';this.howmany='';this.date='';this.fun='';})
  

    

  }


  loadImages(): void {
   this.imageHallService.getImages()
    .subscribe(images => this.images = images);
  }
  openModal() {
   document.getElementById('imgModal').style.display = "block";
  }
  closeModal() {
   document.getElementById('imgModal').style.display = "none";
  }
  plusSlides(n) {
   this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
   this.showSlides(this.slideIndex = n);
  }
  showSlides(slideIndex);
  showSlides(n) {
   let i;
   const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf < HTMLElement > ;
   const dots = document.getElementsByClassName("images") as HTMLCollectionOf < HTMLElement > ;
   if (n > slides.length) {
    this.slideIndex = 1
   }
   if (n < 1) {
    this.slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[this.slideIndex - 1].style.display = "block";
   if (dots && dots.length > 0) {
    dots[this.slideIndex - 1].className += " active";
   }
  }
}
