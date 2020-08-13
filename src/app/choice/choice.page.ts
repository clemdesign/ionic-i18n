import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoicePage implements OnInit {

  date: Date;

  constructor(private translateServ: TranslocoService, private cdr: ChangeDetectorRef) {
    this.date = new Date();
  }

  ngOnInit() {
    this.cdr.detectChanges();
  }

  changeLang(lang) {
    this.translateServ.setActiveLang(lang);
    this.cdr.detectChanges();
  }

}
