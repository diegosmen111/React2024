// eslint-disable-next-line no-unused-vars
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
  } from '@chakra-ui/react'
  
import { FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <Box>
        <Menu>
  <MenuButton as={Button} rightIcon={<FaChevronDown />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        <CartWidget />
    </Box>
  )
}

export default NavBar