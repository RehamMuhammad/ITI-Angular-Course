import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
userName: string = "Reham";
jobTitle: string ="Software Developer"
  constructor() { }

  ngOnInit(): void {
  }

}
