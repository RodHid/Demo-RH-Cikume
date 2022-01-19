import { IStaff } from './staff';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc, Firestore, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  
  constructor(private _firestore: Firestore) { }

  createStaff(staff: IStaff): DocumentData {
    const staffRef = collection(this._firestore, 'staff');
    return addDoc(staffRef, staff);
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
    return docData(staffRef) as Observable<IStaff>;
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
