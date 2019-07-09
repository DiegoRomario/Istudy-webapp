import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ButtonCustomComponent } from './button-custom/button-custom.component';

@NgModule({
  declarations: [NavBarComponent, FormComponent, ButtonCustomComponent],
  exports: [NavBarComponent, FormComponent, ButtonCustomComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class ComponentsModule { }
