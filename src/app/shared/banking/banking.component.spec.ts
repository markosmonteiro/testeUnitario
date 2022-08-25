import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../investiments/components/list/list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): should poupanca have 10`, () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it(`(U) getCarteira(): should poupanca have carteira = 50`, () => {
    expect(component.getCarteira).toEqual(50);
  });

  it(`(U) sacar(): should transfer poupanca from carteira`, () => {
    component.setSacar('10');
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it(`(I) setSacar(): should tranfer poupanca from carteira`, () => {
    const el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-carteira').textContent).toEqual('60');
  });

  it(`(U) setSacar(): should tranfer poupanca don't have string (isNaN) or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it(`(U) setDepositar(): should tranfer carteira from poupanca`, () => {
    component.setDepositar('50');
    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  it(`(U) setDepositar(): should tranfer carteira don't have string (isNaN) or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it(`(I) setDepositar(): should tranfer carteira from poupanca`, () => {
    const el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
  });


});
