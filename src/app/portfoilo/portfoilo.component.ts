import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfoilo',
  templateUrl: './portfoilo.component.html',
  styleUrls: ['./portfoilo.component.css']
})
export class PortfoiloComponent implements OnInit {
myWorks = [ { name : "../assets/portfolio/Products.png", Done: true },
{ name :  "../assets/portfolio/Confirnation page.png", Done: false },
{ name : "../assets/portfolio/foodista2.png", Done: false },
{ name :  "../assets/portfolio/landing page.png", Done: true },
{ name : "../assets/portfolio/Social Media Template.png", Done: true },
{ name : "../assets/portfolio/Mercedes.png", Done: false }
 ]  
  constructor() { }

  ngOnInit(): void {
  }

}
