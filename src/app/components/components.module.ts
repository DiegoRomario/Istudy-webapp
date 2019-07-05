import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [NavBarComponent, FormComponent],
  exports: [NavBarComponent, FormComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class ComponentsModule { }
