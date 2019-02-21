import React, { Component } from 'react';
import "../logo/logo.css";
import API from '../../util/API'

class YourLogo extends Component {

  state = {
    userInfo: "",
    authenticated: false
  }

  getUserName = (id) => {
    API.getUserName(id)
      .then(data => {
        this.setState({ userInfo: data.data[0].name });
        this.setState({ authenticated: true });
        console.log(this.state.userInfo)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    let d = localStorage.getItem('id')
    if (d) {
      this.getUserName({ id: d })
    }
  }

  render() {

  let title = null;
  const { authenticated } = this.state;

  if (authenticated) {
    title = <div className="logo">{this.state.userInfo}</div>
  }

  else {
    title = <div className="logo">Evergame</div>
  }
  
  return (

    <div className="logoHolder">
        {title}
    </div>

  );
  }
}

export default YourLogo;