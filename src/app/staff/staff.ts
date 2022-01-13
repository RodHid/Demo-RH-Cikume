/* Defines the Staff entity kinda like OOP */

export interface IStaff {
    id: number,
    staffName: string,
    staffLastName: string,
    staffType: string,
    department: string,
    position: string,
    salary: number
}