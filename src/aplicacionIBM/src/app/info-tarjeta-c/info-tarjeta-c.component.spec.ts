import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTarjetaCComponent } from './info-tarjeta-c.component';

describe('InfoTarjetaCComponent', () => {
  let component: InfoTarjetaCComponent;
  let fixture: ComponentFixture<InfoTarjetaCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTarjetaCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTarjetaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
