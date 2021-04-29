import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import NavDropdown from "./NavDropdown";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import Marginer from "./Marginer";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        {userInfo ? (
          <NavDropdown title={"Welcome " + userInfo.name} id="username">
            <LinkContainer to="/profile">
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <>
            <LinkContainer to="/register">
              <Button small>Create an Account</Button>
            </LinkContainer>
            <LinkContainer to="/login">
              <LoginButton>Sign In</LoginButton>
            </LinkContainer>
          </>
        )}
        <Marginer direction="horizontal" margin="8px" />
        {userInfo && userInfo.isAdmin && (
          <NavDropdown title="Admin" id="adminmenu">
            <LinkContainer to="/admin/userlist">
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        )}
      </AccessibilityContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: #333;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export default Navbar;
