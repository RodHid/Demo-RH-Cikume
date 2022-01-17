/* Defines the Staff entity kinda like OOP */

export interface IStaff {
    id: number,
    dui: string,
    staffName: string,
    staffLastName: string,
    staffType: string,
    department: string,
    position: string,
    salary: number
}

export interface IStaffResolved {
    staff: IStaff;
    error?: any;
  }