import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IconService } from '@app/shared/services/icon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isExpanded: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => { console.log(result); return result.matches}),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private iconService: IconService) {}

  ngOnInit() {
    this.iconService.registerIcons();
  }

}
