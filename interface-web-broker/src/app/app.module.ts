import { SelectionModule } from '@revaturecloud/selection';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import { MainImageComponent } from './components/main-image/main-image.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './modules/routing/routing.module';
import { ForecastModule } from '@revaturecloud/forecast/';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainImageComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    RoutingModule,
    RouterModule,
    ForecastModule,
    SelectionModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
