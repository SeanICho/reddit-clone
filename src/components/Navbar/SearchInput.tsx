import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

type SearchInputProps = {
// user:
};
const effect = {
  border: "1px solid",
  borderColor: "blue.500"
};

const SearchInput:React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1} mr={4} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="pointer"
          children={<SearchIcon color="gray.300"
          mb={1} />}
        />
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            ...effect
          }}
          _focus={{
            outline: "none",
            ...effect
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
}
export default SearchInput;