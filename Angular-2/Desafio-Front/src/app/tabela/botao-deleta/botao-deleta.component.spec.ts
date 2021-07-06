import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoDeletaComponent } from './botao-deleta.component';

describe('BotaoDeletaComponent', () => {
  let component: BotaoDeletaComponent;
  let fixture: ComponentFixture<BotaoDeletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoDeletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoDeletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
