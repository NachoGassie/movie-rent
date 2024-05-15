import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from './interface/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  title = 'Rent-a-Movie';

  links: Link[] = [
    { title: 'Home', url: '/home', active: false },
    { title: 'Rent', url: '/rent', active: false },
  ]
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentUrl = this.router.url;
    this.links.forEach(link => {
      if (link.url === currentUrl) link.active = true;
    });
  }
}
