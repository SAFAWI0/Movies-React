import React from 'react'
import "./moviecard.css"
const Api = "https://image.tmdb.org/t/p/w500/";
 const MovieCard = (props) => {
 
  return (
    <div className='card'>
        <div className='poster'>
            <img src={props.poster_path? Api+props.poster_path:"https://images.unsplash.com/photo-1560109947-543149eceb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpbmVtYXxlbnwwfHwwfHx8MA%3D%3D"}/>
        </div>
        <div className='info'>
            <p className='title'>{props.title}</p>
            <p className='vote'>{props.vote_average}</p>
        </div>
        <div className='overview'>
          <h2 className='title_overview'> Overview:</h2>
          <h3 className='overview_info'>{props.overview}</h3>
        </div>
    </div>
  )
}
export default  MovieCard