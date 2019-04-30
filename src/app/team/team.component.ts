import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.less"]
})
export class TeamComponent implements OnInit {
  userid: any;
  mdurl: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userid = this.route.snapshot.params.id;
    this.mdurl = "assets/db/team/" + this.userid + ".md";
  }
}
