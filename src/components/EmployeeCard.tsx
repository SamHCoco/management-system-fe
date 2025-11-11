import { Employee } from "@/hooks/useEmployees";
import userImage from "../assets/user-account.webp";
import { Card, CardBody, Avatar, Text, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  employee: Employee | null | undefined;
}

function EmployeeCard({ employee }: Props) {
  const navigate = useNavigate();

  if (!employee) {
    return (
      <Card>
        <CardBody>
          <Text>Error</Text>
        </CardBody>
      </Card>
    );
  }

  const handleClick = () => {
    if (employee) {
      navigate("/employee/edit", { state: { employee } });
    }
  };

  return (
    <Card onClick={handleClick} style={{ cursor: "pointer" }}>
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
