import { Component, OnInit, Input } from '@angular/core';
import { SecondsCourses } from 'src/app/models/seconds-courses';
import { SecondsCoursesService } from 'src/app/service/seconds-courses.service';
import { Router } from '@angular/router';
import { ImageSeconds } from 'src/app/models/image-seconds';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-seconds-courses-list',
  templateUrl: './seconds-courses-list.component.html',
  styleUrls: ['./seconds-courses-list.component.css']
})
export class SecondsCoursesListComponent implements OnInit {
  coms:SecondsCourses[]=[];
  coms1:ImageSeconds[]=[];
 

  constructor(private salatService:SecondsCoursesService,  private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.salatService.getSecondsCourses().subscribe((coms:SecondsCourses[])=>{this.coms=coms});
    this.salatService.getSecondsImage().subscribe((coms1:ImageSeconds[])=>{this.coms1=coms1});
    this.messageService.getMsg();
  }
  


  remove(com:SecondsCourses) {
    this.salatService.removeSecondsCourses(com.id).subscribe(() => {
      this.router.navigate(['listSecondss']); 
    })
    }



    removeI(com:SecondsCourses) {
      this.salatService.removeSecondsImage(com.id).subscribe(() => {
        this.router.navigate(['listSecondss']); 
      })
      }

}
