import { Component } from '@angular/core';
import { User } from './models/User';
import { from, Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService) {}

  title = 'rxjs-ng-playground';
  public subscription: Subscription;
  public userTexts: string[];

  run() {
    this.userTexts = [];
    this.subscription = this.userService
      .get()
      .pipe(map((x) => `${x.id} ${x.name} ${x.address}`))
      .subscribe((data) => this.userTexts.push(data));

    this.subscription.unsubscribe();
  }
}
