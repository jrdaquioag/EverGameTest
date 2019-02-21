import React, { Component } from "react";
import "./App.css"
import Header from "../components/header/header";
import List from "../components/list/list";
import Logo from "../components/logo/logo";
import Carousel from "../components/carousel/carousel";
import Sidebar from "../components/sidebar/sidebar";
import API from '../util/API'
import history from '../util/history';




class home extends Component {

  constructor(){
    super()
    this.reloadHome = this.reloadHome.bind(this);
  }

  state = {
    userInfo: "",
    popularList: []
  }
  getUserName = (id) => {
    API.getUserName(id)
      .then(data => {
        this.setState({ userInfo: data.data[0].name });
        console.log(this.state.userInfo)
      })
      .catch(err => console.log(err))
  }

  getPopularList = () => {
    API.getPopularList()
      .then(response => {
        console.log(response); 
        this.setState({ popularList: response.data })
      }
        )
      .then(() => console.log(this.state.popularList))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    let d = localStorage.getItem('id')
    if (d) {
      this.getUserName({ id: d })
    }
  }
  componentWillMount() {
    this.getPopularList()
  }

  reloadHome() {
    window.location.reload();
    history.push('/home');
  }


  handleLogout = () => { console.log("logout") }
  getGameList = () => { console.log("placeholder") }
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Header
            handleLogout={this.handleLogout}
            retrieveList={this.getGameList}
            userName={this.state.userInfo}
            reload={this.reloadHome}
          />
          <br></br>
          <Logo />
          <Carousel />
          {/* <List /> */}
          <div className="listDiv">
            {/* {this.state.data.data === undefined ? <p>Sorry , we are loading...</p> : this.state.data.data.map(elem => <List data={elem} key={elem._id} />)} */}
            {this.state.popularList.map(elem => {
              let cover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${elem.cover.image_id}.jpg`;
              let name = elem.name;
              let summary = elem.summary;
              const { human, date } = elem.release_dates[0];
              let filteredPopularList = { cover, name, summary, releaseDate: [date, human] }
              return <List data={filteredPopularList} key={elem.id} />
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default home;
