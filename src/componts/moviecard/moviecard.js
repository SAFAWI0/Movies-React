import React from 'react'
const Api = "https://image.tmdb.org/t/p/w500/";
 const MovieCard = (props) => {
  return (
    <div className='card'>
        <div className='poster'>
            <img src={Api+props.poster_path}/>
        </div>
        <div className='info'>
            <p className='title'>{props.title}</p>
            <p className='vote'>{props.vote_average}</p>
        </div>
    </div>
  )
}
export default  MovieCard