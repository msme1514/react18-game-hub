import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {

}

const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order
      </MenuButton>
      <MenuList>
        <MenuItem>Order 1</MenuItem>
        <MenuItem>Order 2</MenuItem>
        <MenuItem>Order 3</MenuItem>
      </MenuList>
        
    </Menu>
  )
}

export default SortSelector