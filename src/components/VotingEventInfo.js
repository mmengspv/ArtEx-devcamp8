import React, { useState, useEffect } from "react";
import firebase from "../services/firebase";
import './Cards.css';
import CardItem from './CardItem';
import './../App.css'

export default function Voting() {
  const [votingEvent, setVotingEvent] = useState([]);

  const fetchData = async () => {
    const snapshot = await firebase.database().ref("events").once("value");
    const data = snapshot.val();

    let date = new Date();
    const newEventVoting = data.filter(
      (event) =>
        date.getTime() >= new Date(event.endSendAt).getTime() &&
        date.getTime() < new Date(event.endVotedAt).getTime()
    );

    setVotingEvent(newEventVoting);
    console.log(newEventVoting);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='cards'>
        <h1 className="eventText">Voting</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <li className='cards__items'>
                    {votingEvent.map((e, index) => {
                      return(
                        <li key={index}>
                            <CardItem
                                src={e.imageTitle}
                                text={e.name}
                                path={`/event/${e.eventId}`}
                                
                            />
                        </li>
                      )
                      })}
                </li>
            </div>
        </div>
    </div>
  );
}
