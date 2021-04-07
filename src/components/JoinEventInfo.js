import React, { useState, useEffect } from "react";
import firebase from "../services/firebase";
import './Cards.css';
import CardItem from './CardItem';
import './../App.css'

export default function Join() {
  const [joinEvent, setJoinEvent] = useState([]);

  const fetchData = async () => {
    const snapshot = await firebase.database().ref("/events").once("value");
    const data = snapshot.val();
    setJoinEvent(data);
    let date = new Date();
    const newJoin = data.filter(
      (event) =>
        date.getTime() < new Date(event.endSendAt).getTime()
    );

    setJoinEvent(newJoin);
    console.log(newJoin);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='cards'>
        <h1 className="eventText">JoinUp</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <li className='cards__items'>
                    {joinEvent.map((e, index) => (
                        <li key={index}>
                            <CardItem
                                src={e.imageTitle}
                                text={e.name}
                                path={`/send/${e.eventId}`}
                            />
                        </li>
                    ))}
                </li>
            </div>
        </div>
    </div>
  );
}
