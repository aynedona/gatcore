import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { TagComponent } from './components/tag/tag.component';
import { RookieProfileComponent } from './components/rookie-profile/rookie-profile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    TagComponent,
    TitlePageComponent,
    RookieProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    TagComponent,
    TitlePageComponent,
    RookieProfileComponent,
  ]
})
export class SharedComponentsModule { }
