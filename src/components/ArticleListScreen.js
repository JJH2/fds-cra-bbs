import React, { Component } from 'react';
import styled from 'styled-components';

const LogOutButton = styled.button`
  padding: 2em;
  background-color: tomato;
  border-radius: 5px;
`


export default class ArticleListScreen extends Component {
  handleLogOutClick = () => {
    this.props.onLogOutClick();
  }
  render() {
    return (
      <div>
        게시글 목록
        <LogOutButton onClick={this.handleLogOutClick}>로그아웃</LogOutButton>
      </div>
    );
  }
}
