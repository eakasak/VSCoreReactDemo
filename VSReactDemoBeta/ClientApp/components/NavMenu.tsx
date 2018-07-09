import * as React from 'react';
import {  NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export class NavMenu extends React.Component<{}, {}> {
  handleClick = () => {
    console.log('click ', this);
  }
  public render() {
    return <div >
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="appstore" />Home</span>}>
       
          <MenuItemGroup key="g1" title="Item 1">
         
            <Menu.Item key="1">    <NavLink to={'/'} activeClassName='active'>
              <span className='glyphicon glyphicon-education'></span> Welcome 
                            </NavLink> </Menu.Item>
            <Menu.Item key="2">   <NavLink to={'/fetchdata'}>
              <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink></Menu.Item>
            <Menu.Item key="13">    <NavLink to={'/counter'}>
              <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink> </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12"><NavLink to={'/counter'}>
              <span className='glyphicon glyphicon-education'></span>  Fetch data
                            </NavLink> </Menu.Item>
        </SubMenu>
      </Menu>
    </div>;
  }
}
