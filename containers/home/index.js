import React from 'react'


import Movies from '@/mocks/movies.json'
import Genres from "@/mocks/genres.json"

import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categorias'
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({ selectedCategory, movies }) => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 11)} />
      <MoviesSection title={selectedCategory?.name} movies={movies} />
      <MoviesSection title='Your Favorites' movies={Movies.results.slice(1, 7)} /> 
      <MoviesSection title='Popular Movies' movies={Movies.results.slice(7, 13)} /> 
    </div>
  )
}

export default HomeContainer