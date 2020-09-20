import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

 
  @Input() comm:Review;
  constructor( private service:ReviewService, private router:Router) { }

  ngOnInit(): void {
  }

  remove(com:Review) {
    this.service.removeReviews(com.id).subscribe(() => {
      this.router.navigate(['listdrinks']); 
    })
    }
}
