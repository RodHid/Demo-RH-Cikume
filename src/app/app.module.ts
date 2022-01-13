
/* imports for the database conection */
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

/* Components */
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffModule } from './staff/staff.module';
import { HomeComponent } from './home/home.component';

/*Basic Modules*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

/*Funcionality Modules*/
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/*Routing Modules*/
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //Compatible form, from AngularFire 7 theres a new way to do it
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    StaffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
