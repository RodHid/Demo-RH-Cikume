
/* imports for the database conection */
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

/* Components */
import { HomeComponent } from './home/home.component';

/*Basic Modules*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/*Funcionality Modules*/
import { HttpClientModule } from '@angular/common/http';

/*Routing Modules*/
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    BrowserAnimationsModule,
    //StaffModule --> if you import it on the AppRoutingModule you dont have to import it here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
