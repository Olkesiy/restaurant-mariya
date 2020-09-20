import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { Router } from '@angular/router';
import { ImageRes } from 'src/app/models/image-res';

@Component({
  selector: 'app-image-r-list',
  templateUrl: './image-r-list.component.html',
  styleUrls: ['./image-r-list.component.css']
})
export class ImageRListComponent implements OnInit {


  coms:ImageRes[]=[];
  @Input() post: ImageRes;

  constructor(private imageService:ImageService, private router: Router) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe((coms:ImageRes[])=>{this.coms=coms});
  }

  remove(com:ImageRes) {
    this.imageService.removeImages(com.id) .subscribe(() => {
      this.router.navigate(['listimages']);
    })
    }

}
