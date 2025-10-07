import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
import { By } from '@angular/platform-browser';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Footer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain footer', () => {
    const button = fixture.debugElement.query(By.css('footer'));
    expect(button).toBeTruthy();
  });
});
