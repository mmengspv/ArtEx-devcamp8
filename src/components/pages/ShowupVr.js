import "aframe";
import { Entity, Scene } from "aframe-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../services/firebase";

import ReactDOM from "react-dom";

export default function ShowupVr() {
  const { eventname } = useParams();
  const [topPosts, setTopPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const snapshot = await firebase.database().ref("works").once("value");
    const data = snapshot.val();
    let tmpPosts;
    // console.log(data);
    // const arr = Object.keys(data).filter((key) => data[key].eventId === "1");
    console.log(
      "a",
      Object.keys(data).filter((key) => data[key].eventId === "1")
    );
    tmpPosts = Object.keys(data).filter((key) => data[key].eventId === "1");
    setPosts(tmpPosts);
    console.log(tmpPosts);
    let arr = tmpPosts.map((workKey) => data[workKey]);
    console.log(tmpPosts.map((workKey) => data[workKey]));
    // Object.keys(data).forEach((key) => {
    //   if (data[key].eventId === "1") {
    //     tmpPosts.push(data[key]);
    //     console.log(data[key]);
    //   }
    // });
    findTopPosts(arr);
  };

  const findTopPosts = (arr = []) => {
    let round = arr.length > 12 ? 12 : arr.length;
    const result = [];
    for (let i = 0; i < round; i++) {
      // const tmpTopPosts = [];
      let max = -1;
      let maxVote, indexOfMaxVote;
      arr.forEach((obj, index) => {
        if (obj.votes > max) {
          max = obj.votes;
          indexOfMaxVote = index;
          maxVote = { ...obj };
        }
      });
      result.push(maxVote);
      arr.splice(indexOfMaxVote, 1);
    }
    console.log("maxs", result);
    setTopPosts(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Scene>
        {/* {topPosts[0] && <>{topPosts[0].artist}</>} */}

        {topPosts.length >= 1 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[0].imgUrl }}
            position={{ x: -2.2, y: 1.75, z: -3.3 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 2 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[1].imgUrl }}
            position={{ x: 0, y: 1.75, z: -3.3 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 3 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[2].imgUrl }}
            position={{ x: 2.2, y: 1.75, z: -3.3 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 4 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[3].imgUrl }}
            position={{ x: 3.3, y: 1.75, z: -2.2 }}
            rotation={{ x: 0, y: -90, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 5 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[4].imgUrl }}
            position={{ x: 3.3, y: 1.75, z: 0 }}
            rotation={{ x: 0, y: -90, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 6 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[5].imgUrl }}
            position={{ x: 3.3, y: 1.75, z: 2.2 }}
            rotation={{ x: 0, y: -90, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 7 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[6].imgUrl }}
            position={{ x: 2.2, y: 1.75, z: 3.3 }}
            rotation={{ x: 0, y: -180, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 8 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[7].imgUrl }}
            position={{ x: 0, y: 1.75, z: 3.3 }}
            rotation={{ x: 0, y: -180, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 9 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[8].imgUrl }}
            position={{ x: -2.2, y: 1.75, z: 3.3 }}
            rotation={{ x: 0, y: -180, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 10 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[9].imgUrl }}
            position={{ x: -3.3, y: 1.75, z: 2.2 }}
            rotation={{ x: 0, y: -270, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 11 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[10].imgUrl }}
            position={{ x: -3.3, y: 1.75, z: 0 }}
            rotation={{ x: 0, y: -270, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
        {topPosts.length >= 12 && (
          <Entity
            geometry={{ primitive: "plane", height: "1.2", width: "1.7" }}
            material={{ shader: "flat", src: topPosts[11].imgUrl }}
            position={{ x: -3.3, y: 1.75, z: -2.2 }}
            rotation={{ x: 0, y: -270, z: 0 }}
            event-set__mouseenter={{ scale: "1.2 1.2 1" }}
            event-set__mouseleave={{ scale: "1 1 1" }}
            event-set__click={{ _target: "#image-360", _delay: "300" }}
            proxy-event={{ event: "click", to: "#image-360", as: "fade" }}
          />
        )}
      </Scene>
    </div>
  );
}