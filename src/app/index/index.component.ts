import { Component, OnInit } from '@angular/core';
import { Platform } from "@angular/cdk/platform";
import { NzBackTopModule } from "ng-zorro-antd";
import { fadeMotion, toNumber, NzScrollService } from "ng-zorro-antd/core";
import { fromEvent, Subscription } from "rxjs";
import { distinctUntilChanged, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.less"]
})
export class IndexComponent implements OnInit {
  private scroll$: Subscription | null = null;
  private target: HTMLElement | null = null;
  istop = false;
  constructor(private scrollSrv: NzScrollService, private platform: Platform) {}

  ngOnInit() {
    if (!this.scroll$) {
      this.registerScrollEvent();
    }
  }
  private getTarget(): HTMLElement | Window {
    return this.target || window;
  }

  private handleScroll(): void {
    if (
      this.istop ===
      this.scrollSrv.getScroll(this.getTarget()) < 200
    ) {
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
    this.scroll$ = fromEvent(this.getTarget(), "scroll")
      .pipe(
        throttleTime(50),
        distinctUntilChanged()
      )
      .subscribe(() => this.handleScroll());
  }
}
