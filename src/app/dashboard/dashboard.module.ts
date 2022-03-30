import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FirstStepWelcomeComponent } from './components/first-step-welcome/first-step-welcome.component';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './store/data.reducer';
import { SecondStepWelcomeComponent } from './components/second-step-welcome/second-step-welcome.component';
import { ThirdStepWelcomeComponent } from './components/third-step-welcome/third-step-welcome.component';
import { DetailStepWelcomeComponent } from './components/detail-step-welcome/detail-step-welcome.component';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [
    WelcomeComponent,
    MonitorComponent,
    FirstStepWelcomeComponent,
    SecondStepWelcomeComponent,
    ThirdStepWelcomeComponent,
    DetailStepWelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzStepsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzListModule,
    StoreModule.forRoot({ data: dataReducer })
  ]
})
export class DashboardModule { }
