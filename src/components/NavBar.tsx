import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

function NavBar() {
    return (
        <HStack height={["40px", "50px", "60px"]} padding="10px" >
            <Image src={logo} boxSize="50px" />
            <SearchBar />
            <Spacer/>
            <UserMenu />
        </HStack>
    );
}

export default NavBar