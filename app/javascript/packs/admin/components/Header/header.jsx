import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Layout, Row, Col, Popover, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

class CommonHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleLogOut = () => {
  }

  render() {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Row type="flex" justify="end" align="middle">
          <Col span={3}>
            <Badge className="header-icon" count={5}>
              <Link to="/mailbox">
                <Icon type="mail" />
              </Link>
            </Badge>
            <Popover content={content} title="Title" trigger="click">
              <Badge className="header-icon" dot>
                <a href="#">
                  <Icon type="notification" />
                </a>
              </Badge>
            </Popover>
          </Col>
        </Row>
      </Header>
    );
  }
}


export default CommonHeader;
