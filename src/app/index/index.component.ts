import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { NzBackTopModule } from 'ng-zorro-antd';
import { fadeMotion, toNumber, NzScrollService } from 'ng-zorro-antd/core';
import { fromEvent, Subscription } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

import { HttpClient} from '@angular/common/http';

import { user } from './interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  private scroll$: Subscription | null = null;
  private target: HTMLElement | null = null;
  istop = false;
  users: user[];
  studies;
  array = ['行人重识别', '行为识别', '目标跟踪'];
  constructor(
    private scrollSrv: NzScrollService,
    private platform: Platform,
    private http: HttpClient
  ) {}

  ngOnInit() {
    if (!this.scroll$) {
      this.registerScrollEvent();
    }
    this.getstudy();
    this.getusers();
  }
  private getTarget(): HTMLElement | Window {
    return this.target || window;
  }

  private handleScroll(): void {
    if (this.istop === this.scrollSrv.getScroll(this.getTarget()) < 200) {
      return;
    }
    this.istop = !this.istop;
  }

  private removeListen(): void {
    if (this.scroll$) {
      this.scroll$.unsubscribe();
    }
  }

  private registerScrollEvent(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.removeListen();
    this.handleScroll();
    this.scroll$ = fromEvent(this.getTarget(), 'scroll')
      .pipe(
        throttleTime(50),
        distinctUntilChanged()
      )
      .subscribe(() => this.handleScroll());
  }

  getstudy() {
    this.http.get('assets/db/study.json').subscribe((res: any) => {
      this.studies = res.data;
    });
  }

  getusers() {
    this.http.get('assets/db/team.json').subscribe((res: any) => {
      this.users = res.data;
    });
  }

  gouser(userurl) {
    if (userurl) {
      window.open(userurl, '_blank');
    }
  }
}
