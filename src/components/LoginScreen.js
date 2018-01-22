import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px;
  background-color: pink;
  box-sizing: border-box;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 3em;
  color: skyblue;
`;

const Button = styled.button`
  background-color: tomato;
  color: #fff;
  padding: 1em;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: brown;
    color: black;
  }
`;

export default class LoginScreen extends Component {
  handleLogInClick = e => {
    this.props.onLogInClick();
  }

  render() {
    return (
      <Wrap>
        <Logo>BBS</Logo>
        <Button onClick={this.handleLogInClick}>구글로 로그인</Button>
      </Wrap>
    );
  }
}
