import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotarjetaComponent } from './infotarjeta.component';

describe('InfotarjetaComponent', () => {
  let component: InfotarjetaComponent;
  let fixture: ComponentFixture<InfotarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfotarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
