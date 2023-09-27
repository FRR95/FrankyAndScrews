import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule  } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarmenuComponent } from './components/navbarmenu/navbarmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SliderComponent } from './components/slider/slider.component';

const rutas: Routes = [

  { path: '', component:SliderComponent },
  { path: 'QuienesSomos', component:SliderComponent },
  { path: 'Discografia', component:AccordionComponent }, 

 

  
  
  
  
  { path: '**',redirectTo:'/' ,pathMatch:'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarmenuComponent,
    FooterComponent,
    AccordionComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(rutas),
  ],
  exports:[
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
