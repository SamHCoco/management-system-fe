import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Box, Text, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsPersonCircle } from "react-icons/bs";

function UserMenu() {
    return (
        <Menu>
            <MenuButton 
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                _hover={{ bg: "gray.100" }}
                _expanded={{ bg: "gray.200" }}
            >
                <Box display="flex" alignItems="center" gap={5}>
                    <Icon as={BsPersonCircle} boxSize={8} color="gray.600" />
                    <Text whiteSpace="nowrap">John Doe</Text>
                    <ChevronDownIcon />
                </Box>
            </MenuButton>
            <MenuList>
                <MenuItem>Account</MenuItem>
                <MenuDivider />
                <MenuItem color="red.500">Logout</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default UserMenu;