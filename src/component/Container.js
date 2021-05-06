import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generateData } from 'reducer/artists';

//import Polaroid from "react-polaroid";

const Container = () => {
  const artists = useSelector((store)=> store.artists.artists)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(generateData())
  },[])

  return(
    <>
      <h1>Best Artworks of all Time</h1>
    <div className="grid-container">
      {
        artists.map((artist)=> 
        <div className="item" key={artist.id}>
          <div className="item-image">
          <img src={`https://best-artworks-of-all-time.herokuapp.com/image-directory/${artist.name.replace(" ", "_")}_7.jpg`}/>
          </div>
          <div className="item-detail">
          <p>Name: {artist.name}</p>
          <p>Genre :{artist.genre}</p>
          <p>nationality: {artist.nationality}</p>
          <p>Between: {artist.years}</p>
          <p>Paintings: {artist.paitings}</p>
          </div>

        </div>)
      }
    </div>
    </>
  )
}

export default Container;