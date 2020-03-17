import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  programmes = [
    "Year 2 | Ages 6 & 7",
    "Year 3 | Ages 7 & 8",
    "Year 4 | Ages 8 & 9",
    "Year 5 | Ages 9 & 10",
    "Year 6 | Ages 10 & 11",
    "Year 6 | SATs",
    "Year 7 | Ages 11 & 12"
  ];

  constructor() {}

  ngOnInit(): void {}
}
