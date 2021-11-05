import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCajeraPage } from './home-cajera.page';

describe('HomeCajeraPage', () => {
  let component: HomeCajeraPage;
  let fixture: ComponentFixture<HomeCajeraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCajeraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCajeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
