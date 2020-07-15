import React, { useState } from 'react'
import MovieCard from './MovieCard'

const SearchMovies = () => {

  //states- input query, movies
  const [query, setQuery] = useState('')

  // Create the state for movies and update the state
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {

    e.preventDefault();
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=461861b1b02ef98f57ca6f10d0d971f8&language=en-US&query=${query}&page=1&include_adult=false`

    try{
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    }catch(err){
      console.error(err)
    }


  }


  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label className='label' htmlFor='query'>Movie Name</label>
        <input 
          className='input' 
          type='text' 
          name='query' 
          value={query}
          placeholder='i.e. Jurassic Park'
          onChange={e => setQuery(e.target.value)}
        />
        <button 
          className='button' 
          type='submit'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
    </>
    
  )
}

export default SearchMovies