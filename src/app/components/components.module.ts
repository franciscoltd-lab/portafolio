import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToggleComponent } from './toggle/toggle.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ToggleComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToggleComponent,
    NavbarComponent,
  ]
})
export class ComponentsModule { }
