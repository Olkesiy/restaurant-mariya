import { Component, OnInit } from '@angular/core';
import { SalatService } from 'src/app/service/salat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salat-add',
  templateUrl: './salat-add.component.html',
  styleUrls: ['./salat-add.component.css']
})
export class SalatAddComponent implements OnInit {

  name:string=''
  GrPc:string=''
  price:string=''

  constructor( private salatService: SalatService, private router: Router) { }

  ngOnInit(): void {
  }


  

  addPost(): void {
    const data = {
      name: this.name,
      GrPc: this.GrPc,
      price: this.price
    }

    this.salatService.addSalats(data)
      .subscribe(() => {
      //  this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
        this.name = '';
        this.GrPc = '';
        this.price = '';
      },() => {
        this.router.navigate(['listsalat'])
      })
      
  }
}
