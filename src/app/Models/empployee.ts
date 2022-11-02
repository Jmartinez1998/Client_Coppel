import { RoleEmployee } from "./role-employee";

export interface Empployee {
    id: number;
    employeeNumber: number;
    name: string;
    lastName: string;
    role: RoleEmployee[];
}
