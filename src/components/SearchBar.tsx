import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
    return (
        <InputGroup>
            <InputLeftElement>
                <BsSearch />
            </InputLeftElement>
            <Input borderRadius={20} placeholder='search' variant='outline' />
        </InputGroup>
    );
}

export default SearchBar