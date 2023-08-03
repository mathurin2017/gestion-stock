import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Menu, menuProperties } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuProperties: Menu[] = menuProperties;

  constructor(private router: Router) {}

  navigate(url: string) {
    this.router.navigate([url]);
  }

}
