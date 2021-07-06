import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAdicionaComponent } from './botao-adiciona.component';

describe('BotaoAdicionaComponent', () => {
  let component: BotaoAdicionaComponent;
  let fixture: ComponentFixture<BotaoAdicionaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoAdicionaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoAdicionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
