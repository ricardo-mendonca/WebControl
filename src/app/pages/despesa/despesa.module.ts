import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { DespesaRoutingModule } from './despesa-routing.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespesaComponent } from './despesa.component';


@NgModule({
  providers: [],
  declarations: [DespesaComponent],
  imports: [
    CommonModule,
    DespesaRoutingModule,
    NavbarModule,
    SidebarModule,

    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
})
export class DespesaModule {}
