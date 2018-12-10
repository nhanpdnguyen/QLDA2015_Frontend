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
          <NavbarBrand href="/" className="m-auto d-md-none">
            <div className="my-logo-text d-flex flex-column justify-content-center align-items-center pl-0">
              <div>TRUNG TÂM LUYỆN THI ONLINE</div>
              <div id="logo-name">CANDYLIGHT</div>
            </div>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar className="menu-content">
            <Nav className="mx-auto justify-content-around" navbar>
              {
                this.props.isLoggedIn ?
                  <NavItem className="d-md-none">
                    <NavLink href="/cap-nhat-tai-khoan">
                      <img className="nav-item-image" alt="Trang chủ" src="/images/avatar.png" />
                      <div className="nav-item-text ml-2 mt-2">{this.props.firstName + ' ' + this.props.lastName}</div>
                    </NavLink>
                  </NavItem>
                  :
                  <NavItem className="d-md-none">
                    <NavLink href="/dang-nhap">
                      <img className="nav-item-image" alt="Đăng nhập" src="/images/Nav-icon6-01.png" />
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
                  <Link to="/bai-hoc/toan">
                    <DropdownItem>Toán</DropdownItem>
                  </Link>
                  <Link to="/bai-hoc/tieng-viet">
                    <DropdownItem>Tiếng Việt</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon3-01.png" />
                  <div className="nav-item-text ml-2 mt-2">Bài tập</div>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/bai-tap/toan">
                    <DropdownItem>Toán</DropdownItem>
                  </Link>
                  <Link to="/bai-tap/tieng-viet">
                    <DropdownItem>Tiếng Việt</DropdownItem>
                  </Link>
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
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon7.png" />
                  <div className="nav-item-text ml-2 mt-2">Đổi thưởng</div>
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/">
                  <img className="nav-item-image" alt="Trang chủ" src="/images/Nav-icon5-01.png" />
                  <div className="nav-item-text ml-2 mt-2">Giới thiệu</div>
                </NavLink>
              </NavItem>

              {
                this.props.isLoggedIn ?
                  <NavItem className="d-md-none">
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