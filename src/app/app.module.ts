import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { SnapListsComponent } from './snap-lists/snap-lists.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SingleSnapComponent } from './single-snap/single-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    SnapListsComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    SingleSnapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
