import { Component, OnInit, Input } from '@angular/core';
import { Salat } from 'src/app/models/salat';
import { SalatService } from 'src/app/service/salat.service';
import { Router } from '@angular/router';
import { ImageSalat } from 'src/app/models/image-salat';

@Component({
  selector: 'app-salatlist',
  templateUrl: './salatlist.component.html',
  styleUrls: ['./salatlist.component.css']
})
export class SalatlistComponent implements OnInit {

  coms:Salat[]=[];
  coms1:ImageSalat[]=[];
  @Input() post: Salat;
  statusMessage: string;

  constructor(private salatService:SalatService, private router: Router) { }

  ngOnInit(): void {
    this.salatService.getSalats().subscribe((coms:Salat[])=>{this.coms=coms});
    this.salatService.getSalatsImage().subscribe((coms1:ImageSalat[])=>{this.coms1=coms1});
  }
  


  remove(com:Salat) {
    this.salatService.removeSalats(com.id) .subscribe(() => {
      this.router.navigate(['listsalat']);
    })
    }
    removeI(com:ImageSalat) {
      this.salatService.removeSalatsImage(com.id) .subscribe(() => {
        this.router.navigate(['listsalat']);
      })
      }


    

}
