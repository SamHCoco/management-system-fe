import { Text } from "@chakra-ui/react";
import useEmployees from "@/hooks/useEmployees"

function EmployeeGrid() {
    const{employees, error} = useEmployees();
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>{employee.firstName} {employee.lastName}</li>
                ))}
            </ul>
        </>
    )
}

export default EmployeeGrid