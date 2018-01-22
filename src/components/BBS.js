import React, { Component } from 'react';
import * as firebase from 'firebase';

import LoginScreen from './LoginScreen';
import ArticleListScreen from './ArticleListScreen';

export default class BBS extends Component {
  state = {
    page: 'login'
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyBXc3tUGlmsFA5ub_rLc_wF-sw6QGM_HYw",
      authDomain: "fds-cra-bbs-790f1.firebaseapp.com",
      databaseURL: "https://fds-cra-bbs-790f1.firebaseio.com",
      projectId: "fds-cra-bbs-790f1",
      storageBucket: "",
      messagingSenderId: "125390268893"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({
          page: 'list'
        })
      } else {
        this.setState({
          page: 'login'
        })
      }
    });
  }

  handleLogInClick = e => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOutClick = e => {
    firebase.auth().signOut()
  }
  render() {
    return (
      <div>
      {
        this.state.page === 'login'
        ? <LoginScreen onLogInClick={this.handleLogInClick} />
        : this.state.page === 'list'
        ? <ArticleListScreen onLogOutClick={this.handleLogOutClick}/>
        : null
      }
      </div>
    );
  }
}
