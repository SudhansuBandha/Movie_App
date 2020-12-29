import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favourite">
        <a href="/favourite">Favourite</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu