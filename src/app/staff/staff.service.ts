import { Staff } from './staff';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private _firestore: AngularFirestore, private _http: HttpClient) { }

  /*createStaff(staffData: Staff): Staff {
    return this._firestore.collection('Staff').add(staffData);
  }*/

  /* async createStaff(staff: Staff): Observable<Staff> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return 
  } */

  async updateStaff(data: Staff) {
    await this._firestore.collection('Staff').add(data);
  }
  async deleteStaff(data: Staff) {
    await this._firestore.collection('Staff').add(data);
  }

}
