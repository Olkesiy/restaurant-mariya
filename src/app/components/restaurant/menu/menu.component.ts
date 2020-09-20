import { Component, OnInit } from '@angular/core';
import { SalatService } from 'src/app/service/salat.service';
import { Salat } from 'src/app/models/salat';
import { FirstCoursesService } from 'src/app/service/first-courses.service';
import { CoursesService } from 'src/app/service/courses.service';
import { SecondsCoursesService } from 'src/app/service/seconds-courses.service';
import { DrinkService } from 'src/app/service/drink.service';
import { FirstCourses } from 'src/app/models/first-courses';
import { Courses } from 'src/app/models/courses';
import { SecondsCourses } from 'src/app/models/seconds-courses';
import { Drink } from 'src/app/models/drink';
import { ImageDrink } from 'src/app/models/image-drink';
import { ImageSalat } from 'src/app/models/image-salat';
import { ImageCourses } from 'src/app/models/image-courses';
import { ImageSeconds } from 'src/app/models/image-seconds';
import { ImageFirst } from 'src/app/models/image-first';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  salat:Salat[]=[];
  salatImage:ImageSalat[]=[];
  
  first:FirstCourses[]=[];
  firstImage:ImageDrink[]=[];
  
  courses:Courses[]=[];
  courcesImage:ImageCourses[]=[];
  
  second:SecondsCourses[]=[];
  secondsImage:ImageSeconds[]=[];
  
  drink:Drink[]=[];
  drinksImage:ImageDrink[]=[];
  constructor(private salatService:SalatService, private firstCoursesService:FirstCoursesService,private coursesService:CoursesService,private secondsCoursesService:SecondsCoursesService,private drinkService:DrinkService) { }

  ngOnInit(): void {
    this.salatService.getSalats().subscribe((coms:Salat[])=>{this.salat=coms});
    this.firstCoursesService.getFirstCourses().subscribe((coms:FirstCourses[])=>{this.first=coms});
    this.coursesService.getCourses().subscribe((coms:Courses[])=>{this.courses=coms});
    this.secondsCoursesService.getSecondsCourses().subscribe((coms:SecondsCourses[])=>{this.second=coms});
    this.drinkService.getDrinks().subscribe((coms:Drink[])=>{this.drink=coms});



    this.salatService.getSalatsImage().subscribe((coms:ImageSalat[])=>{this.salatImage=coms});
    this.firstCoursesService.getCoursesImage().subscribe((coms:ImageFirst[])=>{this.firstImage=coms});
    this.coursesService.getCoursesImage().subscribe((coms:ImageDrink[])=>{this.courcesImage=coms});
    this.secondsCoursesService.getSecondsImage().subscribe((coms:ImageDrink[])=>{this.secondsImage=coms});
    this.drinkService.getDrinkImage().subscribe((coms:ImageDrink[])=>{this.drinksImage=coms});
  }

}
