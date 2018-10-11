import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="sm">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar className="menu-content">
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon1-01.png" />
                  <div className="nav-item-text ml-2 mt-2">Trang chủ</div>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon2-01.png" />
                  <div className="nav-item-text ml-2 mt-2">Bài học</div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Toán</DropdownItem>
                  <DropdownItem>Tiếng Việt</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon3-01.png" />
                  <div className="nav-item-text ml-2 mt-2">Bài tập</div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Toán</DropdownItem>
                  <DropdownItem>Tiếng Việt</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon4-01.png" />
                  <div className="nav-item-text ml-2 mt-2">Thi thử</div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Toán</DropdownItem>
                  <DropdownItem>Tiếng Việt</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/">
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon5-01.png" />
                  <div className="nav-item-text ml-2 mt-2">Giới thiệu</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon6-01.png" />
                  <div className="nav-item-text ml-2 mt-2">Liên hệ</div>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}