import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllProductsWafersUserPage } from './all-products-wafers-user.page';

describe('AllProductsWafersUserPage', () => {
  let component: AllProductsWafersUserPage;
  let fixture: ComponentFixture<AllProductsWafersUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductsWafersUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllProductsWafersUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
