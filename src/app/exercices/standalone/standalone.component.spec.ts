import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandaloneComponent } from './standalone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StandaloneComponent', () => {
  let component: StandaloneComponent;
  let fixture: ComponentFixture<StandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandaloneComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
