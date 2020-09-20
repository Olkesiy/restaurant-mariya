import { Component, OnInit, Input } from '@angular/core';
import { ImageHall } from 'src/app/models/image-hall';
import { ImageHallService } from 'src/app/service/image-hall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-h-list',
  templateUrl: './image-h-list.component.html',
  styleUrls: ['./image-h-list.component.css']
})
export class ImageHListComponent implements OnInit {
  coms:ImageHall[]=[];
  @Input() post: ImageHall;

  constructor(private imageHallService:ImageHallService, private router: Router) { }

  ngOnInit(): void {
    this.imageHallService.getImages().subscribe((coms:ImageHall[])=>{this.coms=coms});
  }

  remove(com:ImageHall) {
    this.imageHallService.removeImages(com.id) .subscribe(() => {
      this.router.navigate(['listimages']);
    })
    }

}
