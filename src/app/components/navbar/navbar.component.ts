import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mainTitle } from '../../common/common.constants';
import { Link } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  title = mainTitle;

  links: Link[] = [
    { title: 'Home', url: '/home', active: false },
    { title: 'About', url: '/about', active: false },
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
