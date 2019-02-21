import React, { Component } from 'react';
import API from '../../util/API';
import List from './List';
import "../SearchWidget/searchbar.css"



class SearchWidget extends Component {
    state = {
        query: '',
        apiReturn: []
    }
    handleStopSearch = () => {
        this.setState({ apiReturn: [] });
        console.log("hide option list")
    }
    fetchData = () => {
        console.log(this.state.query)
        API.search(this.state.query)
            .then(res => {
                let dataFilter = res.data.filter(el => el.release_dates[el.release_dates.length - 1].date > 1550348343)
                this.setState({ apiReturn: dataFilter });
                console.log(">>>>>>>This is the API data after Filter<<<<<<<<<")
                console.log(dataFilter)
                console.log(">>>>>>>This is props<<<<<<<<<")
                console.log(this.props)
            })
            .catch(error => { console.log(error) });
    }
    handleInputChange = event => {
        this.setState({ query: event.target.value });
        if (event.target.value.length <= 5) {
            return;
        } else {
            setTimeout(this.fetchData, 300)
        }
    }
    render() {
        return (
            <div className="holderDiv"
                onBlur={this.handleStopSearch}
            >
                <form>
                    <input className="searchBar"
                        type="text"
                        placeholder="Search"
                        value={this.state.query}
                        onChange={this.handleInputChange}

                    />
                </form>
                <div className="container"

                    style={{
                        position: "absolute",
                        zIndex: "3",
                        width: "70vw",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        border: "black 1px solid"
                    }}
                >
                    {this.state.apiReturn.map((elem) => <List handleUpdateList={this.props.handleNewAdd} apiReturn={elem} stopSearch={this.handleStopSearch} key={elem.id} />)}

                </div>
            </div>
        )
    }
}

export default SearchWidget
