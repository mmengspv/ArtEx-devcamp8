import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebase from "../services/firebase";
import './Art.css';
import ArtItem from './ArtItem';

export default function ShowImagePage({eventId}) {
  const [work, setWork] = useState(null);

  const fetchData = async () => {
    const snapshot = await firebase.database().ref("works").once("value");
    const data = snapshot.val();
    const arr = Object.keys(data).filter((key) => {
      return data[key]['eventId'] === eventId})
    
    setWork(arr.map(key => data[key]));
  };
  useEffect(() => {
    // console.log(eventname);
    fetchData();
  }, []);

  return (
    <div className='arts'>
        <h1 className='title1'>Art</h1>
        <div className='arts__container'>
          <div className='arts__wrapper'>
            <li className='arts__items'>
              {!work ? null : work.map((w, index) => (
                <li key={index}>
                  <ArtItem
                      src={w.imgUrl}
                      text={w.name}
                      path={`/selected/${w.workId}`}
                      eventId = {w.workId}
                  />
                </li>
              ))}
            </li>
          </div>
        </div>
    </div>
  );
}
