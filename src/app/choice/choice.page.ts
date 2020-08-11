import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoicePage implements OnInit {

  constructor(private translateServ: TranslateService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdr.detectChanges();
  }

  changeLang(lang) {
    this.translateServ.use(lang).subscribe(() => {
      this.cdr.detectChanges();
    });
  }

}
