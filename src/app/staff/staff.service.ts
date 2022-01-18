import { IStaff } from './staff';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc, Firestore, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private api: string = 'api/staff-data.json';
  private staff: IStaff[] = [];
  private url: string = 'https://fir-rh-a9eb7-default-rtdb.firebaseio.com/staff';
  constructor(private _http: HttpClient,
    //private readonly _firestore: Firestore,
    private  _firestore: Firestore) { }

   createStaff(staff: IStaff): DocumentData {
    const staffRef = collection(this._firestore, 'staff');
    return addDoc(staffRef, staff);
  }

  addStaff(staff: IStaff): void {
    console.log(staff);
    this.staff.push(staff);
    this._http.put(this.url+'.json',this.staff).subscribe({
      next: response => console.log('Resultado de agregacion: ',response),
      error: err => console.log('Error: ', err)
    });
  }

  readStaff$(): Observable<IStaff[]> {
    const staffRef = collection(this._firestore, 'staff');
    return collectionData(staffRef, { idField: 'id' }) as Observable<IStaff[]>;
  }

  updateStaff(staff: IStaff, id: any): DocumentData {
    const staffRef = doc(this._firestore, `staff/${id}`);
    return setDoc(staffRef, staff);
  }

  deleteStaff(staff: IStaff): Promise<void> {
    const staffRef = doc(this._firestore, `staff/${staff.id}`);
    return deleteDoc(staffRef);
  }

  specifiedStaff$(id: string): Observable<IStaff> {
    const staffRef = doc(this._firestore, `staff/${id}`);
    return docData( staffRef ) as Observable<IStaff>;
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
