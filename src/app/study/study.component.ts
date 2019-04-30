import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.less']
})
export class StudyComponent implements OnInit {
  studyid: any;
  mdurl: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    this.studyid = this.route.snapshot.params.id;
    this.mdurl = 'assets/db/study/' + this.studyid + '.md';
  }
}
