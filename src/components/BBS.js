import React, { Component } from 'react';
import * as firebase from 'firebase';

export default class BBS extends Component {

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
  }

  render() {
    return (
      <div>BBS</div>
    );
  }
}
