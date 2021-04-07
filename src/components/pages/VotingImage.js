import React from 'react';
import '../../App.css'
import VotingImageInfo from '../VotingImageInfo';
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom';

export default function Event() {
  const { eventId} = useParams()
  return (
    <>
      <Navbar />
      <VotingImageInfo eventId={eventId} />
    </>
  )
}
