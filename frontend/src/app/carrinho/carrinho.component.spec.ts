import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCarrinhoComponent } from './carrinho.component';

describe('ComponentCarrinhoComponent', () => {
  let component: ComponentCarrinhoComponent;
  let fixture: ComponentFixture<ComponentCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCarrinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
