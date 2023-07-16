import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgZorroAntdModule } from '../ng-zorro.module';
import { HttpClientModule } from '@angular/common/http';
import { authRoutes } from './auth.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Feature } from './store/auth.reducers';
import { BooksService } from './services/auth.service';
import { BooksEffect } from './store/effects/login.effect';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    NgZorroAntdModule,
    HttpClientModule,
    StoreModule.forFeature(Feature),
    EffectsModule.forFeature([BooksEffect]),
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [BooksService],
})
export class AuthModule {}
