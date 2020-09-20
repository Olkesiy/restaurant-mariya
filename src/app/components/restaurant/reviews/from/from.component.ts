import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

 

  name:string=''
  email:string=''
  desription:string=''

  
  constructor(private reviewService:ReviewService) { }

  ngOnInit(): void {

   

  }

  addCom():void{

    const data={name:this.name,email:this.email,description:this.desription}

    this.reviewService.addReviews(data)
    .subscribe(()=>{this.name='';this.email='';this.desription='';})
  

    

  }

}
