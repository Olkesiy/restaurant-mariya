import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


   coms:Review[]=[];
  constructor(private reviewService:ReviewService) { }

  ngOnInit(): void {

   this.reviewService.getReviews().subscribe((coms:Review[])=>{this.coms=coms});
  }

}
