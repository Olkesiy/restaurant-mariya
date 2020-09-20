import { Component, OnInit, Input } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/service/drink.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { ImageDrink } from 'src/app/models/image-drink';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.css']
})
export class DrinksListComponent implements OnInit {

  coms:Drink[]=[];
  coms1:ImageDrink[]=[];
 

  constructor(private salatService:DrinkService,  private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.salatService.getDrinks().subscribe((coms:Drink[])=>{this.coms=coms});
    this.salatService.getDrinkImage().subscribe((coms1:ImageDrink[])=>{this.coms1=coms1});
    this.messageService.getMsg();
  }
  


  remove(com:Drink) {
    this.salatService.removeDrinks(com.id).subscribe(() => {
      this.router.navigate(['listdrinks']); 
    })
    }



    removeI(com:Drink) {
      this.salatService.removeDrinkImage(com.id).subscribe(() => {
        this.router.navigate(['listdrinks']); 
      })
      }

      
}
