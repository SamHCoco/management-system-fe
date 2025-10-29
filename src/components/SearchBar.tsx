import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
    return (
        <InputGroup>
            <Input borderRadius={20} placeholder='search' variant='outline' />
        </InputGroup>
    );
}

export default SearchBar