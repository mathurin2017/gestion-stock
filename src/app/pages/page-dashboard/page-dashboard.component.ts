import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from 'src/app/composants/menu/menu.component';
import { HeaderComponent } from 'src/app/composants/header/header.component';

@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, HeaderComponent],
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent {

}
