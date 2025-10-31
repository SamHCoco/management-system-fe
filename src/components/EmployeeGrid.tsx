import { SimpleGrid, Text } from "@chakra-ui/react";
import useEmployees from "@/hooks/useEmployees";
import EmployeeCard from "./EmployeeCard";

function EmployeeGrid() {
  const { employees, error } = useEmployees();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} spacing={10}>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default EmployeeGrid;
