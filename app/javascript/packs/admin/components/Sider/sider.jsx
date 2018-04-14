import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class SiderComponent extends Component {
  onCollapse = () => true
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
      >
        <div className="ant-layout-logo"></div>
        <Menu theme="dark" mode="vertical">
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderComponent;
