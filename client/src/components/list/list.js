import React from "react";
import "../list/list.css";
// import moment from "moment";
import Countdown from 'react-countdown-now';

function List(props) {

  console.log(props);

  let time = props.data.releaseDate[0];
  time = parseInt(time)*1000;

  let time2 = props.data.releaseDate[1];
  // let timeChange = moment(time, 'YYYY-MMM-DD').format('YYYYMMDD');
  // let currentTime = moment();
  // let currentTime2 = moment(currentTime).format("YYYYMMDD");
  // let secondsConversion = currentTime.diff(timeChange, "seconds");
  // let finalTime = parseInt(secondsConversion) * 1000;

  const Completionist = () => <div className="ready">Ready to Play!</div>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    }
    if (time2 === "TBD") {
      // Render a complete state
      return <div className="countdownTimer">TBD</div>;
    }
    else {
      // Render a countdown
      return <div className="countdownTimer">Releases in: {days} Days {hours} H : {minutes} M : {seconds} S </div>;
    }
  };


  return (
    <div className="listHolder" key={props.data._id}>
      <img src={props.data.cover} className="listImg" alt={props._id}></img>
      <h2>{props.data.name}</h2>
      <Countdown
          date={time}
          renderer={renderer}
          />
      <p className="listDescription">Description: {props.data.summary}</p>
      {props.data._id ? <button onClick={() => props.handleDelete(props.data._id)} className="btn btn-danger deleteBtn"><strong>X</strong></button> : <></>}

    </div>
  )

}

export default List;