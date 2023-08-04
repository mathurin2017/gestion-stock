import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu, menuProperties } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuProperties: Menu[] = menuProperties;
  private lastSelectedMenu?: Menu;

  constructor(private router: Router) {}

  navigate(menu: Menu) {
    this.lastSelectedMenu ? this.lastSelectedMenu.active = false : true;
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

}
