import { VStack, Button, Box, Text } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
  component: string;
}

interface MenuListProps {
  menuItems?: MenuItem[];
}

function MenuList({ menuItems = defaultMenuItems }: MenuListProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <Box p={4} bg="white" height="100vh" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold" mb={6} color="gray.700">
        Navigation
      </Text>
      <VStack spacing={2} align="stretch">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? "solid" : "ghost"}
            colorScheme={isActive(item.path) ? "blue" : "gray"}
            justifyContent="flex-start"
            onClick={() => handleMenuItemClick(item.path)}
            size="lg"
          >
            {item.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

const defaultMenuItems: MenuItem[] = [
  {
    label: "Employees",
    path: "/employees",
    component: "EmployeeGrid",
  },
];

export default MenuList;
