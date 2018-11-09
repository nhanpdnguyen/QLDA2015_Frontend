import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
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
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand className="m-auto d-md-none">
            <Link to="/">
              <div className="my-logo-text d-flex flex-column justify-content-center align-items-center pl-0">
                <div>TRUNG TÂM LUYỆN THI ONLINE</div>
                <div id="logo-name">CANDYLIGHT</div>
              </div>
            </Link>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar className="menu-content">
            <Nav className="mx-auto" navbar>
              {
                this.props.isLoggedIn ?
                  <NavItem>
                    <NavLink href="/cap-nhat-tai-khoan">
                      <img className="nav-item-image" alt="Trang chủ" src="/images/avatar.png" />
                      <div className="nav-item-text ml-2 mt-2">{this.props.firstName + ' ' + this.props.lastName}</div>
                    </NavLink>
                  </NavItem>
                  :
                  <NavItem>
                    <NavLink href="/dang-nhap">
                      <img className="nav-item-image" alt="Đăng nhập" src="" />
                      <div className="nav-item-text ml-2 mt-2">Đăng nhập</div>
                    </NavLink>
                  </NavItem>
              }

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
                  <DropdownItem>
                    <Link to="/bai-hoc/toan">Toán</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/bai-hoc/tieng-viet">Tiếng Việt</Link>
                  </DropdownItem>
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

              {
                this.props.isLoggedIn ?
                  <NavItem>
                    <NavLink href="#" onClick={this.props.signOut}>
                      <img className="nav-item-image" alt="Đăng xuất" src="" />
                      <div className="nav-item-text ml-2 mt-2">Đăng xuất</div>
                    </NavLink>
                  </NavItem>
                  : null
              }

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}