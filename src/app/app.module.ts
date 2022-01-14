
/* imports for the database conection */
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

/* Components */
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffModule } from './staff/staff.module';
import { HomeComponent } from './home/home.component';

/*Basic Modules*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
/*Funcionality Modules*/
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/*Routing Modules*/
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    //StaffModule --> if you import it on the AppRoutingModule you dont have to import it here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
