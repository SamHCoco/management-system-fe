import { Employee } from "@/hooks/useEmployees";
import {
  Card,
  CardBody,
  Avatar,
  Box,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";

interface Props {
  employee: Employee;
}

function EmployeeCard({ employee }: Props) {
  return (
    <Card>
      <CardBody>
        <VStack spacing={3} align="center">
          <Avatar
            size="lg"
            name={`${employee.firstName} ${employee.lastName}`}
          />

          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            {employee.firstName} {employee.lastName}
          </Text>

          <Text textAlign="center">
            Department: {employee.employeeDepartmentId}
          </Text>

          <Text textAlign="center">Email: {employee.email}</Text>

          <Text textAlign="center">Phone: {employee.phone}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default EmployeeCard;
