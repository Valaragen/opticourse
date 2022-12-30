import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {
  title!: string;
  description!: string;

  ngOnInit(): void {
    this.title = "Test"
    this.description = "Description"
  }
}
