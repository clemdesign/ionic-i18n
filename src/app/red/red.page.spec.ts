import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedPage } from './red.page';

describe('RedPage', () => {
  let component: RedPage;
  let fixture: ComponentFixture<RedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
