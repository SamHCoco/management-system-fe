import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchBar from "./SearchBar";

function NavBar() {
    return (
        <HStack height={["40px", "50px", "60px"]} padding="10px" >
            <Image src={logo} boxSize="50px" />
            <SearchBar />
            <Text>Management System</Text>
        </HStack>
    );
}

export default NavBar