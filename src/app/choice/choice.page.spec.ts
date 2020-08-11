import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoicePage } from './choice.page';

describe('ChoicePage', () => {
  let component: ChoicePage;
  let fixture: ComponentFixture<ChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
