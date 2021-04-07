import React, { useState, useEffect } from "react";
import firebase from "../../services/firebase";
import { useParams } from "react-router-dom";
import Heart from "react-animated-heart";
import '../ImageDetail.css'

let database = firebase.database();

export default function VotingImageSelected() {
  const [offsetY, setOffsetY] = useState(0)
  const [isClick, setClick] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { eventId} = useParams()
  const [image, setImage] = useState([]);
  const [likeUsers, setlikeUsers] = useState([]);

  const fetchData = async () => {
    console.log(eventId)
    const snapshot = await firebase.database().ref("works").once("value");
    const data = snapshot.val();

    setImage(data[eventId]);
    setlikeUsers(data[eventId].likeUsers);
    let count = likeUsers.filter(
      (user) => user === firebase.auth().currentUser.uid
    ).length;

    if(count === 0){
      setClick(false)
    }else{
      setClick(true)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function checkLikeStatus() {
    fetchData();

    console.log(image.votes);
    if (image.votes === 0) {
      await database.ref("/works").update({
        [eventId]: {
          ...image,
          votes: image.votes + 1,
          likeUsers: [await firebase.auth().currentUser.uid],
        },
      });
    } else if (image.votes > 0) {
      let count = likeUsers.filter(
        (user) => user === firebase.auth().currentUser.uid
      ).length;

      console.log(
        likeUsers.filter((user) => user === firebase.auth().currentUser.uid)
          .length
      );
      if (count > 0) {
        await database.ref("/works").update({
          [eventId]: {
            ...image,
            votes: image.votes - 1,
            likeUsers: likeUsers.filter(
              (user) => user !== firebase.auth().currentUser.uid
            ),
          },
        });
        setClick(false)
      } else if (count === 0) {
        await database.ref("/works").update({
          [eventId]: {
            ...image,
            votes: image.votes + 1,
            likeUsers: [...likeUsers, firebase.auth().currentUser.uid],
          },
        });
        setClick(true)
      }
    }
  }

  

  return (
    <div className="page">
      <div className="page1 paraPage" style={{backgroundImage: `url(${image.imgUrl})`, transform: `translateY(${ offsetY * -0.15}px)`}}></div>
      <div className="page2">
          <div className="row1">
              <h1 className="imgName">{image.imgTitle}</h1>
              <div className="heart" >
              <Heart isClick={isClick} onClick={() => {setClick(!isClick)}} />
              </div>
          </div>
          <h1 className="imgOwner">{image.artist}</h1>
          <h1 className="description">{image.detail}</h1>
      </div>
    </div>
  );
}
