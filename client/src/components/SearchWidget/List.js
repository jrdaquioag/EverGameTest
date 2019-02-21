import React, { Component } from 'react';
import Cover from './Cover';
import Genre from './Genre';
import Company from './Company';
import Name from './Name';
import ReleaseDate from './ReleaseDate';
import Addbtn from './Addbtn';
import API from '../../util/API';
import "../SearchWidget/searchbar.css"

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseOver: false,
            imgLink: `https://images.igdb.com/igdb/image/upload/t_thumb/${props.apiReturn.cover.image_id}.jpg`,
            info2db: {
                userId: localStorage.getItem("id"),
                name: props.apiReturn.name,
                genre: props.apiReturn.genres,
                companyName: props.apiReturn.involved_companies.filter(el => el.publisher)[0].company.name,
                releaseDate: [
                    props.apiReturn.release_dates[props.apiReturn.release_dates.length - 1].date,
                    props.apiReturn.release_dates[props.apiReturn.release_dates.length - 1].human
                ],
                cover: `https://images.igdb.com/igdb/image/upload/t_cover_big/${props.apiReturn.cover.image_id}.jpg`,
                summary: props.apiReturn.summary
            }
        }
    }
    onMouseOver() { this.setState({ mouseOver: true }) }
    onMouseLeave() { this.setState({ mouseOver: false }) }

    add2db(data) {
        console.log(this.props)
        API.addNew(data).then(() => console.log("what are you doing ???")).then(() => { this.props.handleUpdateList() }).catch(err => { console.log(err) })
    }

    render() {
        return (
            <li key={this.props.apiReturn.id}
                className="row responseDiv"
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                <div className="col-2 d-flex text-center">
                    <Cover imgInfo={this.state.imgLink} alt={this.props.apiReturn.id} />
                </div>
                <div className="col-9 d-flex flex-column justify-content-center" onClick={() => { this.props.stopSearch() }} >
                    {this.state.mouseOver ?
                        (
                            <>
                                <Genre genreList={this.state.info2db.genre.slice(0, 2)} />
                                <Company companyInfo={this.state.info2db.companyName} />
                            </>
                        )
                        :
                        (
                            <>
                                <Name name={this.state.info2db.name} />
                                <ReleaseDate date={this.state.info2db.releaseDate} />
                            </>
                        )}
                </div>

                <div className="col-1 d-flex" onMouseDown={() => {
                    this.add2db(this.state.info2db);
                    console.log(this)
                    // this.props.handleUpdateList()
                }}>
                    <Addbtn />
                </div>
            </li>
        )
    }
}

export default List