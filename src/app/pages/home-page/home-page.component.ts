import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  gradesAndDescriptions = [
    {
      grade: "Grade 2",
      description: "Growing up with Numbers"
    },
    {
      grade: "Grade 3",
      description: "Multiplication & Division"
    },
    {
      grade: "Grade 4",
      description: "Times Table & Fractions"
    },
    {
      grade: "Grade 5",
      description: "Reasoning & Problem Solving"
    },
    {
      grade: "Grade 6",
      description: "Reinforcing SATs"
    },
    {
      grade: "Grade 7",
      description: "Exploring Maths"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
