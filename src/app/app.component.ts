import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LabelComponentComponent } from './label-component/label-component.component';
import { ClickButtonNameComponent } from './click-button-name/click-button-name.component';
import { NameLengthComponent } from './name-length/name-length.component';
import { PipeCurrencyComponent } from './pipe-currency/pipe-currency.component';
import { BuiltInComponent } from './built-in/built-in.component';
import { AppUserComponent } from './app-user/app-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LabelComponentComponent, ClickButtonNameComponent, NameLengthComponent,
    PipeCurrencyComponent, BuiltInComponent, AppUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
