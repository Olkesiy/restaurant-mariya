import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/service/drink.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-drinks-add',
  templateUrl: './drinks-add.component.html',
  styleUrls: ['./drinks-add.component.css']
})
export class DrinksAddComponent implements OnInit {

  name:string=''
  GrPc:string=''
  price:string=''

  constructor(private drinkService: DrinkService,private messageService:MessageService, private router: Router) { }

  ngOnInit(): void {
  }

  addPost(): void {
    const data = {
      name: this.name,
      GrPc: this.GrPc,
      price: this.price
    }

    this.drinkService.addDrinks(data)
      .subscribe(() => {
        this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.name = '';
        this.GrPc = '';
        this.price = '';
        this.router.navigate(['listdrinks'])
      })
      
  }

}
