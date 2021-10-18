import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {
skills : Array<String> =  ["UI/UX Design", "Responsive Design", "Web Design", "Mobile App Design", "Front-End " ]
constructor() { }

ngOnInit(): void {
}

}
