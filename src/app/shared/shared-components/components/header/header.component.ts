import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public tags = [
    {
      title: 'Minha segurança',
      icon: 'shield_person',
      color: 'transparent',
      link: ''
    },
    {
      title: 'Segurança de terceiros',
      icon: 'lan',
      color: 'orange',
      link: ''
    }
  ]
}
