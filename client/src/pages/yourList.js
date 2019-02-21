import React, { Component } from "react";
import "./App.css"
import Header from "../components/header/header";
import List from "../components/list/list";
import YourLogo from "../components/logo/yourLogo";
import Sidebar from "../components/sidebar/sidebar";
import SearchWidget from '../components/SearchWidget/SearchWidget'
import API from '../util/API'

class yourList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      userInfo: ""
    }
    this.getGameList = this.getGameList.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.deleteOneGame = this.deleteOneGame.bind(this)
  }

  handleLogout = () => { this.setState({ data: [] }) }

  getGameList = () => {
    API.sendId({ id: localStorage.getItem('id') })
      .then((res) => {
        this.setState({ data: res.data.reverse() });
        console.log(res.data)
      })
  }

  deleteOneGame = (_id) => {
    API.delete(_id)
      .then(() => this.getGameList())
      .catch(err => console.log(err))
  }

  getUserName = (id) => {
    API.getUserName(id)
      .then(data => {
        this.setState({ userInfo: data.data[0].name });
        console.log(this.state.userInfo)
      })
      .catch(err => console.log(err))
  }



  componentDidMount() {
    let d = localStorage.getItem("id")
    if (d) {
      this.getGameList();
      this.getUserName({ "id": d })
    }
  }

  render() {
    return (
      <div className="wrapper" >
        <Sidebar />
        <div id="content">
          <Header handleLogout={this.handleLogout} retrieveList={this.getGameList} userName={this.state.userInfo} />
          <YourLogo />
          <SearchWidget handleNewAdd={this.getGameList} />
          <div className="listDiv">
            {/* {this.state.data.data === undefined ? <p>Sorry , we are loading...</p> : this.state.data.data.map(elem => <List data={elem} key={elem._id} />)} */}
            {this.state.data.map(elem => <List data={elem} key={elem._id} handleDelete={this.deleteOneGame} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default yourList;
