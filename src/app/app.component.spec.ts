import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { User } from './models/User';
import { UserService } from './services/user.service';
import { from } from 'rxjs';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;
let userServiceStub = describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [UserService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set userTexts to concatenated strings of users', () => {
    component.run();
    expect(component.userTexts).toContain('1 David Ingared');
  });
});
