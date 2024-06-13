import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  mobileMenuActive = true;

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}
