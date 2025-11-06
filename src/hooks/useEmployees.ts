import { useEffect, useState } from "react";
import apiClientEmployee from "@/services/api-client-employee";

export interface Employee {
  id: number;
  firstName: string;
  middleNames: string | null;
  lastName: string;
  employeeDepartmentId: number;
  department: string;
  email: string;
  phone: string;
  addressFirstLine: string;
  addressSecondLine: string | null;
  addressCity: string;
  addressPostCode: string;
  createdAt: string | null;
  lastModifiedAt: string | null;
}

interface Page {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

interface ListAllEmployeesResponse {
  content: Employee[];
  page: Page;
}

function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClientEmployee
      .get<ListAllEmployeesResponse>(
        "/employee/list-all?page=0&size=15&sort=id"
      )
      .then((res) => setEmployees(res.data.content))
      .catch((err) => setError(err.message));
  }, []);

  return { employees, error };
}

export default useEmployees;
