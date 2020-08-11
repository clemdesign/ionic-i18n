import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YellowPage } from './yellow.page';

describe('YellowPage', () => {
  let component: YellowPage;
  let fixture: ComponentFixture<YellowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YellowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
