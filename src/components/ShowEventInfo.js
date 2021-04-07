import React, { useState, useEffect } from "react";
import firebase from "../services/firebase";
import './Cards.css';
import CardItem from './CardItem';
import './../App.css'

export default function Showup() {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    const snapshot = await firebase.database().ref("/events").once("value");
    const data = snapshot.val();

    let date = new Date();

    const showEvents = data.filter(
      (e) =>
        date.getTime() > new Date(e.endVotedAt).getTime() &&
        date.getTime() < new Date(e.endShowAt).getTime()
    );

    setEvents(showEvents);
  };

  useEffect(() => {
    fetchData();
  }, []);

    return (
        <div className='cards'>
            <h1 className="eventText">ShowUp</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <li className='cards__items'>
                        {events.map((e, index) => (
                            <li key={index}>
                                <CardItem
                                    src={e.imageTitle}
                                    text={e.name}
                                    path='/work'
                                />
                            </li>
                        ))}
                    </li>
                </div>
            </div>
        </div>
    );
}
