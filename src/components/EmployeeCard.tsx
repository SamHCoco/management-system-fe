import { Employee } from "@/hooks/useEmployees";
import userImage from "../assets/user-account.webp";
import { Card, CardBody, Avatar, Text, VStack, Image } from "@chakra-ui/react";

interface Props {
  employee: Employee | null | undefined;
}

function EmployeeCard({ employee }: Props) {
  if (!employee) {
    return null;
  }

  return (
    <Card>
      <CardBody>
        <VStack spacing={3} align="center">
          <Image src={userImage} />
          <Avatar
            size="lg"
            name={`${employee.firstName} ${employee.lastName}`}
          />

          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            {employee.firstName} {employee.lastName}
          </Text>

          <Text textAlign="center">Department: {employee.department}</Text>

          <Text textAlign="center">Email: {employee.email}</Text>

          <Text textAlign="center">Phone: {employee.phone}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default EmployeeCard;
