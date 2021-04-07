import React, { useState, useEffect } from "react"
import firebase from "../../services/firebase"
import auth from "../../services/firebase-auth"
import '../Form.css'

let storage = firebase.storage()
let storageRef = storage.ref("images/")
let database = firebase.database()

export default function EventForm() {
    const [post, setPost] = useState({
        createdAt: "",
        name: ""
      })

    const [image, setImage] = useState(undefined)
    const [filename, setFilename] = useState("")
    const [showImage, setShowImage] = useState(undefined)
    const [countEvents, setCountEvents] = useState(0);

  const fetchData = async () => {
    const snapshot = await firebase.database().ref("events").once("value");
    const data = snapshot.val();
    setCountEvents(data.length);
    console.log(data.length);
  };

  useEffect(() => {
    fetchData();
  }, []);

    const handleName = (e) => {
        setPost({
          ...post,
          name: e.target.value,
        })
    }

    const selectImage = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            setFilename(e.target.files[0].name)
            setShowImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    async function create(e) {
        try {
          console.log(filename)
          e.preventDefault()
          const data = new FormData()
          data.append("file", image)
          let imageRef = storageRef.child(filename)
          await imageRef.put(image)
          const imageTitle = await imageRef.getDownloadURL()
          await database.ref("/events").update({
            [countEvents]: {
              ...post,
              createdAt: new Date(),
              creator: auth.currentUser.email,
              endSendAt: new Date(new Date().getTime() + (10*1000*60*60*24)),
              endShowAt: new Date(new Date().getTime() + (60*1000*60*60*24)),
              endVotedAt: new Date(new Date().getTime() + (30*1000*60*60*24)),
              eventId: countEvents,
              imageTitle: imageTitle,
            },
          })
        } catch (e) {
          console.log(e)
        }
      }

    return (
    <>
      <div class="split2 right2">
        <div class="centered2">
          <h2 class="quote2">Let's get started</h2>
            <textarea className="title Box1" rows='1' cols="50" type="text" placeholder="Event Title" onChange={handleName}></textarea><br/>
            <textarea className="detail Box1" rows="10" cols="50" type="text" placeholder="Detail, Up to 500 words." maxLength="500" ></textarea>
          <button className="uploadBtn" type="button" onClick={create}>Publish</button>
        </div>
      </div>
      <label className="uploadArea">
        <div class="split2 left2" style={{backgroundImage: `url(${showImage})`}} >
          <div class="centered2">
            <h5 className="leftText">{showImage === undefined ? 'Upload Your Event Thumbnail' : ''}</h5>
            <input className="chooser" type="file" onChange={selectImage}></input>
          </div>
        </div>
      </label>
    </>
    )
}