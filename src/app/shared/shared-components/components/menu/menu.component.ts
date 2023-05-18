import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuActive!: string;
  public menu = [
    {
      title: 'Home',
      icon: 'dashboard',
      isActive: false,
      link: 'dashboard'
    },
    {
      title: 'Hub Score',
      icon: 'language',
      isActive: false,
      link: 'hubscore'
    },
    {
      title: 'Notificações',
      icon: 'notifications',
      isActive: false,
      link: 'notifications'
    },
    {
      title: 'Terceiros',
      icon: 'lan',
      isActive: false,
      link: 'contractors'
    },
    {
      title: 'Avaliações',
      icon: 'plagiarism',
      isActive: false,
      link: 'evaluation'
    },
    {
      title: 'Padrões e Frameworks',
      icon: 'security',
      isActive: false,
      link: 'default'
    },
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.menuActive = window.location.href.includes('dashboard') ? 'dashboard' :
      window.location.href.includes('evaluation') ? 'evaluation' : 'dashboard';
  }

  ngOnInit(): void {
  }

  public route(route: any) {
    this.menuActive = route.link;
    if(route.link == 'dashboard') {
      this.router.navigate(['../', route.link], { relativeTo: this.activatedRoute });
    } else if(route.link == 'evaluation') {
      let evaluationId = Math.floor(Math.random() * 4) + 1;
      this.router.navigate(['../evaluation', evaluationId], { relativeTo: this.activatedRoute });
    }
  }
}
