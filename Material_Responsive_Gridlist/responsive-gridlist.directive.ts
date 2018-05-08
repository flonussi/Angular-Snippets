import { Directive, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatBreakpoints } from '@app/model/breakpoints.model';
import { MatGridList } from '@angular/material';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DynamicBreakpoint, DEFAULT_DYNAMIC_GRIDLIST } from '@app/shared/directives/dynamic-gridlist/dynamic-gridlist.model';

@Directive({
  selector: 'mat-grid-list[dynamicGridList]',
  exportAs: 'dynamicGridList'
})
export class DynamicGridListDirective implements OnInit {
  @Input('dynamicGridList') breakpoints: DynamicBreakpoint[];

  private breakpoints$: Observable<any>[] = [];

  constructor(private gridList: MatGridList, private breakpointObserver: BreakpointObserver, private cd: ChangeDetectorRef) {
    this.gridList.cols = 3;
  }

  ngOnInit(): void {
    if (!this.breakpoints) {
      this.breakpoints = DEFAULT_DYNAMIC_GRIDLIST;
    }

    for (const bp of this.breakpoints) {
      this.breakpoints$.push(this.breakpointObserver.observe(bp.breakpoint).map(res => res.matches));
    }

    Observable.combineLatest(this.breakpoints$).subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        if (result[i] === true) {
          this.gridList.cols = this.breakpoints[i].columns;
        }
      }
    });
  }
}
