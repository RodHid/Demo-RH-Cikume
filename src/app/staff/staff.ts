/* Defines the Staff entity kinda like OOP */

export interface IStaff {
    id: string,
    dui: number,
    staffName: string,
    staffLastName: string,
    staffType: string,
    department: string,
    position: string,
    salary: number
}