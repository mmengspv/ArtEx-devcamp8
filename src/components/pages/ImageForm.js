import React, { useState, useEffect } from "react"
import firebase from "../../services/firebase"
import auth from "../../services/firebase-auth"
import { useParams } from 'react-router-dom';
import '../Form.css'

let storage = firebase.storage()
let storageRef = storage.ref("images/")
let database = firebase.database()

export default function ImageForm() {
  const { eventId} = useParams()

  const [post, setPost] = useState({
    imgTitle: "",
    artist: "",
    detail: "",
    day: "",
    votes: 0,
    eventId: "",
    workId: "",
  })
  const [image, setImage] = useState(undefined)
  const [filename, setFilename] = useState("")
  const [showImage, setShowImage] = useState(undefined)
  const [countWorks, setCountWorks] = useState(0)

  const fetchData = async () => {
    const snapshot = await firebase
      .database()
      .ref("users/" + auth.currentUser.uid)
      .once("value")
    const data = snapshot.val()
    if (data) {
      setCountWorks(data.length)
      console.log(data)
      console.log(data.length)
    }
  }

  useEffect(() => {
    console.log("test")
    fetchData()
  }, [])

  const handleImageTitle = (e) => {
    setPost({
      ...post,
      imgTitle: e.target.value,
    })
    // console.log(newPost.imgTitle)
  }

  const handleArtist = (e) => {
    setPost({
      ...post,
      artist: e.target.value,
    })
    // console.log(newPost.artist)
  }

  const handleDetail = (e) => {
    setPost({
      ...post,
      detail: e.target.value,
    })
    // console.log(newPost.detail)
  }

  const selectImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
      setFilename(e.target.files[0].name)
      setShowImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  async function upload(e) {
    try {
      console.log(filename)
      e.preventDefault()
      const data = new FormData()
      data.append("file", image)
      let imageRef = storageRef.child(filename)
      await imageRef.put(image)
      const imageUrl = await imageRef.getDownloadURL()
      const newKey = (await database.ref("works").push()).key
      await database.ref("/works").update({
        [newKey]: {
          ...post,
          day: new Date(),
          imgUrl: imageUrl,
          workId: newKey,
        },
      })
      await database.ref("/users/" + auth.currentUser.uid).update({
        [countWorks]: newKey,
      })
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <>
    <div class="split2 right2">
      <div class="centered2">
        <h2 class="quote">Submission</h2>
        <textarea className="title Box1" rows='1' cols="50" type="text" placeholder="Image Name" onChange={handleImageTitle}></textarea><br/>
        <textarea className="artist Box1" rows='1' cols="50" type="text" placeholder="Artist" onChange={handleArtist}></textarea><br/>
        <textarea className="detail Box1" rows="6" cols="50" type="text" placeholder="Detail" onChange={handleDetail}></textarea><br/>
        <button className="uploadBtn" type="button" onClick={upload}>Submit</button>
      </div>
    </div>
    <label className="uploadArea">
      <div class="split2 left2" style={{backgroundImage: `url(${showImage})`}} >
        <div class="centered2">
          <h5 className="leftText">{showImage === undefined ? 'Upload Your Work' : ''}</h5>
          <input className="chooser" type="file" onChange={selectImage}></input>
        </div>
      </div>
    </label>
    </>
  )
}