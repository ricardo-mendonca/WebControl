import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@NgModule(
    {
        providers:[],
        declarations:[
          DashboardComponent,
          NavbarComponent,
        ],
        imports:[
            CommonModule,
            DashboardRoutingModule
        ]
    }
)

export class DashboardModule{}
