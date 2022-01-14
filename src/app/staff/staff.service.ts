import { IStaff } from './staff';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { orderBy, query, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private api: string = 'api/staff-data.json';
  private ref!: any;
  constructor(private _http: HttpClient,
    private _firestore: Firestore) { }

  createStaff(staff: IStaff){
    const staffRef = collection(this._firestore, 'staff');
    return addDoc(staffRef, staff);
  }
    
  readStaff(): Observable<IStaff[]> {
    //const staffRef = this._db.collection('staff', order => order.orderBy('idStaff'));
    const staffRef = collection(this._firestore, 'staff');
    return collectionData(staffRef, {idField: 'id'}) as Observable<IStaff[]>;
  }

  updateStaff(staff: IStaff){
    const staffRef = doc(this._firestore, `staff/${staff.id}`);
    return setDoc(staffRef, staff);
  }

  deleteStaff(staff: IStaff) {
    const staffRef = doc(this._firestore, `staff/${staff.id}`);
    return deleteDoc(staffRef);
  }



  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
