import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

function Header(){

    return (
      <Menu>

        <Menu.Item><h1>Dev @ Deakin</h1></Menu.Item>
        

        <Input className="headerSearch" icon='search' placeholder='Search...' />
             

        <Menu.Menu position="right">

        <Menu.Item 
          name='post'
        >
          Post
        </Menu.Item>

        <Menu.Item 
          name='login'
        >
         <a href='/login'>Log in</a>
          
        </Menu.Item>

        </Menu.Menu>
      </Menu>

    )
}
export default Header