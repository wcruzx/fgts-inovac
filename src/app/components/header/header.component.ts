import { Component } from '@angular/core';
import { MenuItem } from '../../models/HeaderModel';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  menuItems: MenuItem[] = [
    { id: 1, label: 'Home', target: 'home' },
    { id: 5, label: 'Serviços', target: 'servicos' },
    { id: 3, label: 'Equipe', target: 'equipe' },
    { id: 2, label: 'FAQ', target: 'faq' },
    { id: 4, label: 'Contato', target: 'contato' },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  getLogo(): { fgts: string; inovac: string } {
    return {
      fgts: 'FGTS',
      inovac: 'Inovac',
    };
  }

  onMenuItemClick(item: MenuItem): void {
    console.log(`Menu item clicked: ${item.label} - Target: ${item.target}`);

    if (this.isMenuOpen) {
      this.toggleMenu();
    }

    this.navigateToTarget(item.target);
  }

  private navigateToTarget(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
